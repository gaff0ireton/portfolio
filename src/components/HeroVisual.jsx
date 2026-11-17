import { useRef } from 'react';
import { MathUtils, Vector2, Vector3, Color } from 'three';
import { Canvas, useFrame } from '@react-three/fiber';

const shapes = [
    {
        id: 1,
        position: [0, 1.5, 0],
        speedX: 0.2,
        speedY: 0.5,
        scale: 2,
    },
    {
        id: 2,
        position: [0, -1.5, 0],
        speedX: 0.2,
        speedY: 0.5,
        scale: 2,
    },
    {
        id: 3,
        position: [0, 0, 0],
        speedX: -1,
        speedY: -1,
        scale: 1,
    },
];

// 三角錐を描画・操作するコンポーネント
function Tetrahedron({ position, speedY, speedX, scale }) {
    const meshRef = useRef(null);
    const groupRef = useRef(null);
    const worldPositionRef = useRef(new Vector3());
    const shapePointRef = useRef(new Vector2());
    const materialRef = useRef(null);

    const white = new Color('#ffffff');
    const cyan = new Color('#00ffff');

    useFrame((state, delta) => {
        if (!meshRef.current ||
            !groupRef.current ||
            !materialRef.current
        ) return;

        meshRef.current.rotation.y += delta * speedY;
        meshRef.current.rotation.x += delta * speedX;

        // 三角錐の中心位置をワールド座標で取得
        groupRef.current.getWorldPosition(worldPositionRef.current);

        // カメラから見た2D座標に変換
        worldPositionRef.current.project(state.camera);

        // Vector2にX・Y座標をセット
        shapePointRef.current.set(
            worldPositionRef.current.x,
            worldPositionRef.current.y
        );

        // マウスとの距離を求める
        const distance = state.pointer.distanceTo(shapePointRef.current);

        const radius = 0.5;

        // 距離から反応の強さを求める
        const strength = MathUtils.clamp(1 - distance, 0, 1);

        // マウスが三角錐のどちら側にあるか
        const offsetX = state.pointer.x - shapePointRef.current.x;
        const offsetY = state.pointer.y - shapePointRef.current.y;

        // マウスホバー
        groupRef.current.rotation.y = MathUtils.damp(
            groupRef.current.rotation.y,
            offsetX * 0.3 * strength, // 0.2 / 0.3 = 傾きの大きさ , strength = 距離に応じた反応の強さ
            5, // 追従する速さ
            delta); // フレーム間の経過時間
        groupRef.current.rotation.x = MathUtils.damp(
            groupRef.current.rotation.x,
            offsetY * 0.2 * strength,
            5,
            delta);

        // materialRef.current.color.lerpColors(
        //     white,
        //     cyan,
        //     strength
        // );
    })

    return (
        <group ref={groupRef} position={position} scale={scale}>
            <mesh ref={meshRef}>
                <tetrahedronGeometry args={[1, 0]} />
                <meshBasicMaterial ref={materialRef} color="#fff" wireframe />
            </mesh>
        </group>
    );
}

export default function HeroVisual() {
    return (
        <div className="hero-visual">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <group>
                    {
                        shapes.map(shape =>
                            <Tetrahedron
                                key={shape.id}
                                position={shape.position}
                                speedY={shape.speedY}
                                speedX={shape.speedX}
                                scale={shape.scale} />
                        )
                    }
                </group>
            </Canvas>
        </div>
    );
}