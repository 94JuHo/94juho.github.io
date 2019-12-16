---
layout: post
title: "ubunut startup application 설치방법"
author: Ryan Jung
date: '2019-12-16 14:30:32'
categories: tech
summary: How to install ubuntu startup application
thumbnail: ubuntu.png
---

# Ubuntu startup application 설치 방법

1. 터미널 실행 (Ctrl+Alt+T)
2. 
```
sudo sed -i 's/NoDisplay=true/NoDisplay=false/g' /etc/xdg/autostart/*.desktop
```
입력 후 재부팅
3. 프로그램이 생성됨을 알 수 있다.