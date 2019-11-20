---
layout: post
title: "Terminal에서 git 사용시 에러"
author: Ryan Jung
date: '2019-11-20 21:31:32'
categories: tech
summary: solution of git error in macos terminal
thumbnail: git.png
---

# MacOS 터미널에서 git 사용시 에러발생 대처법

MacOS를 카탈리나로 업데이트한 후, 처음으로 터미널에서 git을 사용하고자 했다. <br>
하지만, 아래와 같이 에러가 발생했다.<br>
```
xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun
```
알고 봤더니, OS 업데이트 때문에 발생하는 에러라고 한다.<br>
해결 방법은 간단했다. 직접 설정에서 소프트웨어 업데이트 버튼을 클릭하여 업데이트를 하거나 아래와 같은 코드를 터미널에 입력한다.<br>
```
xcode-select --install
```
