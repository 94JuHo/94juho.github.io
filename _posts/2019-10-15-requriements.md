---
layout: post
title: "requirements.txt 생성 및 설치"
author: Ryan Jung
date: '2019-10-15 13:08:22'
categories: tech
summary: make a requirements.txt and install
thumbnail: pycharm.png
---

# 프로젝트 requirements.txt 생성 및 설치

여러 프로젝트를 관리하다보면, 내가 생성한 프로젝트의 각종 라이브러리를 재설치하려면 많은 시간이 소요된다.<br>
이러한 수고를 덜어주기 위하여, requirements.txt 파일을 통해 한번에 라이브러리 export 및 install이 가능하다.<br>
우선, 내 프로젝트의 콘솔로 이동하여 아래와 같은 코드를 작성한다.<br>

```
pip freeze > requirements.txt
```
<br>
해당 코드를 작성하면 프로젝트내에 requriements.txt 파일이 생성된다.<br>
해당 파일이 생성되면, 다른 pc에서 프로젝트를 이어나가고자 할때<br>
```
pip install -r requirements.txt
```
<br>
위의 코드 한 줄을 입력하면, 기존 환경에서 설치했던 모든 라이브러리가 그대로 설치된다.