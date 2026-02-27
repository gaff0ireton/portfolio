# distzip シェル関数 使い方

## ① .bashrc を開く

``` bash
code ~/.bashrc
```

------------------------------------------------------------------------

## ② シェル関数を追記する

`.bashrc` に以下の関数を追記し、保存します。

``` bash
distzip () {
    if [ $# -lt 3 ]; then
        echo "Usage: distzip <from-commit> <to-commit> <output-file>"
        return 1
    fi

    local FROM=$1
    local TO=$2
    local OUT=$3

    local FILES=()
    while IFS= read -r -d $'\0' file; do
        FILES+=("$file")
    done < <(git diff -z --name-only "$FROM" "$TO" --diff-filter=ACMR | grep -z '^dist/' | sed -z 's|^dist/||')

    if [ ${#FILES[@]} -eq 0 ]; then
        echo "No files found in 'dist/' directory."
        return 0
    fi

    if git archive -o "$OUT" "$TO:dist" -- "${FILES[@]}"; then
        echo "Successfully saved 'dist/' contents to $OUT"
    else
        echo "Error: Failed to create archive."
        return 1
    fi
}
```

保存後、以下を実行してください。

``` bash
source ~/.bashrc
```

------------------------------------------------------------------------

## ③ コマンド実行

``` bash
distzip <from-commit> <to-commit> <output-file>
```

### 引数の説明

  引数              説明
  ----------------- --------------------------
  `<from-commit>`   差分取得の開始コミットID
  `<to-commit>`     差分取得の終了コミットID
  `<output-file>`   出力するzipファイル名

------------------------------------------------------------------------

## 使用例

``` bash
distzip aaaa bbbb ~/Desktop/diff_$(date +%Y%m%d).zip
```

-   `$(date +%Y%m%d)` を使用すると当日の日付をファイル名に付与できます
-   `~/Desktop/` などのパスを指定すると任意の場所に出力できます
