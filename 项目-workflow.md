<!--
 * @Author: wanggang(wanggang220713@credithc.com)
 * @Date: 2023-05-31 09:32:34
 * @LastEditors: wanggang
 * @LastEditTime: 2024-04-14 09:43:30
 * @Description: 
-->
# 工程化方案
什么是工程化，一个成熟的团队一定得有一套完备的开发，测试，部署链路，否则就无法保证交付质量，重复性的工作多，效率低下，版本混乱人为控制

# 设计思路
我们把日常开发分为 初始化、本地开发，打包构建，测试、部署五个步骤

为了让cli更灵活，可扩展性更好我们的架构分层设计

分为四层

第一层：控制台
第二层：参数解析器
第三层：内核层，包括插件加载、更新检测、commit规范，eslint规范
第四层：插件模版，项目模版、组件模版等模版管理、cicd功能

# 插件注册加载
只允许固定范式的插件命名，注册前校验名称和版本，检验通过安装插件依赖，便可以使用插件提供的命令，并记录缓存在本地
有条件的可以搭建插件市场

# 版本更新
cli每次初始化都会强制版本校验，并强制更新版本，并使用semver版本校验规范检测本地缓存列表兼容性，并增量更新插件，原理是利用package.json的自定义一段