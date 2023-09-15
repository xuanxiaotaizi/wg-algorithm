<!--
 * @Author: wanggang(wanggang220713@credithc.com)
 * @Date: 2023-05-31 09:32:34
 * @LastEditors: wanggang
 * @LastEditTime: 2023-07-18 13:50:10
 * @Description: 
-->
# 工程化方案

## 背景
目前的大前端开发现状：类型多样,多技术栈研发场景（app内嵌h5，纯h5，小程序,RN），统一的cli能保证工作流程、开发规范、开发方式的统一

工程化绝对不是重复造轮子而是对具体业务情况的工作流整合

## 设计思路
借用pipline思想，将工作流分为：初始化、本地开发、打包构建、检查、发布五个步骤分别对应：init、dev、build、test、deploy

## 架构设计
三层结构
生态层：项目维度的套件、插件生态
内核层：命令交互、命令注册；插件、套件加载；日志模块
控制台：命令交互层

## 命令设计
内置命令：version help install uninstall config init
套件命令：不同的项目有不同的开发构建需求，主要以项目维度的命令
插件命令：其他的额外需求