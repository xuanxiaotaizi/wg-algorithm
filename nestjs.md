<!--
 * @Author: wanggang wanggang220713@credithc.com
 * @Date: 2024-05-27 11:31:16
 * @LastEditors: wanggang wanggang220713@credithc.com
 * @LastEditTime: 2024-05-31 08:59:23
 * @FilePath: \work\wg-algorithm\nestjs.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# ioc DI
ioc 控制反转，创建对象实例的权利由ioc容器接管，一个类的依赖项由ioc容器配置
DI 依赖注入是实现ioc的一种方式，nestjs的依赖关系通过 class 构造器提供的方式实现，以形参的方式注入对应的实例
实现原理：js的元数据反射，本质是动态类型反推导，原理是编译阶段向对象内注入元数据信息
## 定义元数据
Reflect.defineMetadata(metadataKey, data, target)
## 获取元数据
Reflect.getMetadata(metadataKey, target)，Reflect.getMetadata(metadataKey, instance, methodName)

# 中间件
# 注解
