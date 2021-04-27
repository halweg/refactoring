# Refactoring

## bad smell
代码的坏味道

### 神秘名命

- 改变函数声明
- 变量改名
- 字段改名

### 重复代码（Duplicated Code）

- 提炼函数
- 移动语句
- 函数上移

### 过长函数（Long Function）

- 小函数易于理解的关键是良好的命名
- 99%的情况下：只需要提炼函数
- 提炼函数的阻碍：
大量参数和零时变量，导致新函数参数复杂，
此时运用： “参数对象” 和 “保持对象完整”
最终杀器：
以命令取代函数
- 提炼哪里：

	- 有注释的地方
	- 条件表达式和循环
	- 分解条件表达式
	- 以多态取代条件表达式
	- 拆分循环

### 过长参数列表

- 以查
询取代参数
- 保持对象完整
- 参数对象
- 移除标记参数
- 函数组合成类

### 全局数据

- 封装变量

### 可变数据

- 在一处更新数
据， 却没有意识到软件中的另一处期望着完全不同的数据

### 发散式变化

- 一旦需要
修改， 我们希望能够跳到系统的某一点， 只在该处做修改
- 每当要对某个上下文做修改时， 我们只需要理
解这个上下文， 而不必操心另一个
类似抽象层次

### 霰弹式修改

- 如果需要修改的代码散布四处， 你不但很难找到它们，也很容易错过某个重要的修改。

### 依恋情结

- 一个函数跟另一个模块中的函数或者数据交流格
外频繁， 远胜于在自己所处模块内部的交互

### 数据泥团

- 数据项就像小孩子， 喜欢成群结队地待在一块儿。
你常常可以在很多地方看到相同的三四项数据： 两个类中相同的字段、 许多函数签名中相同的参数。 
这些总是绑在一起出现的数据真应该拥有属于它们自己的对象
- 一个好的评判办法是： 
删掉众多数据中的一项。 如果这么做， 其他数据有没有因而失去意义？ 如果它们不再有意义， 这就是一个明确信号： 你应该为它们产
生一个新对象
- 如果你有一组总是同时出现的基本类型数据， 这就是数据泥团的征兆，

### 基本类型偏执

- 我们发现一个很有趣的现象： 
很多程序员不愿意创建对自己的问题域有用的基本类型
如钱、 坐标、 范围等。 
- 于是， 我们看到了
把钱当作普通数字来计算的情况、 计算物理量时无视单位（如把英寸与毫米相
加） 
- 字符串是这种坏味道的最佳培养皿， 比如， 电话号码不只是一串字符。 一个
体面的类型， 至少能包含一致的显示逻辑， 在用户界面上需要显示时可以使
用。 “用字符串来代表类似这样的数据”是如此常见的臭味， 以至于人们给这类变
量专门起了一个名字， 叫它们“类字符串类型”（stringly typed） 变量

### 重复的switch

- 在不同的地方反复使用同样的switch或者if和else
- 每当你要怎加一个分支的时候，
需要找到全部的switch，并添加那个分支。容易遗漏
- 多态给了我们对抗这种黑暗力量的武器

### 循环语句

- 如今， 函数作为一等公民已经得到了广泛的支持，
因此我们可以使用以管道取代循环（231） 来让这些老古董退休

### 冗赘的元素

- 可能有这样一个函数， 它的名字就跟实现代码看起来一模一样； 
也可能有这样一个类，根本就是一个简单的函数

### 夸夸其谈通用性

- 噢， 我想我们总有一天需要做这事”， 
并因而企图以各式各样的钩子和特殊情况来处理一些非必要的事情， 这种坏味道就出现了
- 如果函数的某些参数未被用上， 可以用改变函数声明 去掉这些参数。 
如果有并非真正需要、只是为不知远在何处的将来而塞进去的参数， 也应该用  改变函数声明 去掉
- 如果你的某个抽象类其实没有太大作用， 请运用折叠继承体系

### 临时字段

- 有时你会看到这样的类： 
其内部某个字段仅为某种特定情况而设。 这样的代码让人不易理解，
因为你通常认为对象在所有时候都需要它的所有字段。
在字段未被使用的情况下猜测当初设置它的目的， 会让你发疯。
- 提炼类
- 引入特例

### 过长的消息链

- 如果你看到用户向一个对象请求另一个对象，
然后再向后者请求另一个对象， 
然后再请求另一个对象……这就是消息链
- 应对方法

	- 隐藏委托关系
	- 先观察消息链最终得到的对象是用
来干什么的， 看看能否以提炼函数（106） 把使用该对象的代码提炼到一个独立
的函数中， 再运用搬移函数（198） 把这个函数推入消息链。

### 中间人

- 有时人们人们可能过度运用委托。 
你也许会看到某个类的接口有一半的函数都委
托给其他类，
这样就是过度运用。 这时应该使用移除中间人
直接和真正负责的对象打交道。
- 应对方法

	- 如果这样“不干实事”的函数只有少数几个， 可以运用内联
函数（115） 把它们放进调用端。
	- 如果这些中间人还有其他行为， 可以运用以委
托取代超类（399） 或者以委托取代子类（381） 把它变成真正的对象，

### 内幕交易

- 如果两个模块总是在咖啡机旁边窃窃私语， 就应该用搬移函数和搬移字段 减少它们的私下交流。 

如果两个模块有共同的兴趣， 可以尝试再新建一个模块， 把这些共用的数据放在一个管理良好的地方； 
或者用隐藏委托关
系 ， 把另一个模块变成两者的中介。
- 继承常会造成密谋， 因为子类对超类的了解总是超过后者的主观愿望。 如果
你觉得该让这个孩子独立生活了， 请运用以委托取代子类（381） 或以委托取代
超类（399） 让它离开继承体系

### 过大的类

- 如果想利用单个类做太多事情， 其内往往就会出现太多字段。 
一旦如此， 重复代码也就接踵而至了
- 你可以运用提炼类（182） 将几个变量一起提炼至新类内。 
提炼时应该选择
类内彼此相关的变量， 将它们放在一起
- 提炼类（182） 、 提炼超类（375）
或是以子类取代类型码（362

### 异曲同工的类

- 使用类的好处之一就在于可以替换： 今天用这个类， 未来可以换成用另一个
类。 但只有当两个类的接口一致时， 才能做这种替换。 
- 可以用改变函数声明
（124） 将函数签名变得一致。 但这往往还不够， 请反复运用搬移函数（198） 将
某些行为移入类中， 直到两者的协议一致为止。 
- 如果搬移过程造成了重复代码，
或许可运用提炼超类（375） 补偿一下。

### 纯数据类

- 所谓纯数据类是指： 它们拥有一些字段， 以及用于访问（读写） 这些字段的
函数， 除此之外一无长物。 
-  这样的类只是一种不会说话的数据容器， 它们几乎一
定被其他类过分细琐地操控着。 
- 立刻运用封装记录（162） 将它们封装起来。 对
于那些不该被其他类修改的字段， 请运用移除设值函数
- 然后， 找出这些取值/设值函数被其他类调用的地点。 尝试以搬移函数
（198） 把那些调用行为搬移到纯数据类里来。 如果无法搬移整个函数， 就运用
提炼函数（106） 产生一个可被搬移的函数
- 纯数据类常常意味着行为被放在了错误的地方。 也就是说， 只要把处理数据
的行为从客户端搬移到纯数据类里来， 就能使情况大为改观。
- 但也有例外情况，
一个最好的例外情况就是， 纯数据记录对象被用作函数调用的返回结果， 比如使
用拆分阶段（154） 之后得到的中转数据结构就是这种情况。 这种结果数据对象
有一个关键的特征： 它是不可修改的（至少在拆分阶段（154） 的实际操作中是
这样） 。 不可修改的字段无须封装， 使用者可以直接通过字段取得数据， 无须通
过取值函数。

### 被拒绝的遗赠

- 子类应该继承超类的函数和数据。 但如果它们不想或不需要继承， 又该怎么
办呢？ 它们得到所有礼物， 却只从中挑选几样来玩！
- 传统说法，这就意味着继承体系设计错误。
你需要为这个子类新建一个兄弟类， 再运用函数下移（359） 和字段下移（361） 把所有用不到的函数下推给那个兄弟。 

这样一来， 超类就只持有所有子类共享的东西。 你常常会听到这样的建议： 所有超类都应该是抽象（abstract） 的。
- 如果子类复用了超类的行为（实现） ， 却又不愿意支持超类的接口，
 “被拒绝的遗赠”的坏味道就会变得很浓烈。

既然不愿意支持超类的接口， 就不要虚情假意地糊弄继承体系， 应该运用以委托取代子类（381） 或者以委托取代超类（399） 彻底划清界限

### 注释

- 如果你需要注释来解释一块代码做了什么， 试试提炼函数（106） ； 
如果函
数已经提炼出来， 但还是需要注释来解释其行为， 试试用改变函数声明（124）
为它改名； 如果你需要注释说明某些系统的需求规格， 试试引入断言

## 重构名录第一组(常用)

### 提炼函数
反向重构： 内联函数      

- 
动机：（最合理的观点是）
“将意图与实现分开”： 如果你需要花时间浏览一段代码才能弄清它到底在干什么， 那么就应该将其提炼到一个函数中， 并根据它所做的事为其命名。

- 做法

	- 
创造一个新函数， 根据这个函数的意图来对它命名（以它“做什么”来命名， 而
不是以它“怎样做”命名） 。


		- 如果想要提炼的代码非常简单， 例如只是一个函数调用， 只要新函数的名称能够以更好的方式昭示代码意图， 我还是会提炼它； 

但如果想不出一个更有意义的名称， 这就是一个信号， 可能我不应该提炼这块代码。 

不过， 我不一定非得马上想出最好的名字， 有时在提炼的过程中好的名字才会出现。 有时我会
提炼一个函数， 尝试使用它， 然后发现不太合适， 再把它内联回去， 这完全没问题。 

只要在这个过程中学到了东西， 我的时间就没有白费。

如果编程语言支持嵌套函数， 就把新函数嵌套在源函数里， 这能减少后面需要处理的超出作用域的变量个数。 我可以稍后再使用搬移函（198）把它从源函数中搬移出去。

	- 将待提炼的代码从源函数复制到新建的目标函数中。

	- 仔细检查提炼出的代码， 看看其中是否引用了作用域限于源函数、 在提炼出的
新函数中访问不到的变量。 若是， 以参数的形式将它们传递给新函数。

		- 如果提炼出的新函数嵌套在源函数内部， 就不存在变量作用域的问题了。
这些“作用域限于源函数”的变量通常是局部变量或者源函数的参数。 最通
用的做法是将它们都作为参数传递给新函数。 只要没在提炼部分对这些变量赋
值， 处理起来就没什么难度。
如果某个变量是在提炼部分之外声明但只在提炼部分被使用， 就把变量声
明也搬移到提炼部分代码中去。
如果变量按值传递给提炼部分又在提炼部分被赋值， 就必须多加小心。 如
果只有一个这样的变量， 我会尝试将提炼出的新函数变成一个查询
（query） ， 用其返回值给该变量赋值。
但有时在提炼部分被赋值的局部变量太多， 这时最好是先放弃提炼。 这种
情况下， 我会考虑先使用别的重构手法， 例如拆分变量（240） 或者以查询取
代临时变量（178） ， 来简化变量的使用情况， 然后再考虑提炼函数。

	- 所有变量都处理完之后， 编译。

	- 在源函数中， 将被提炼代码段替换为对目标函数的调用。

	- 测试。
查看其他代码是否有与被提炼的代码段相同或相似之处。 如果有， 考虑使用以
函数调用取代内联代码（222） 令其调用提炼出的新函数。

###  内联函数：    
 反向：提炼函数             

- 动机

	- 
有时候，你会遇到某些函数， 其内部代码和函数名称同样清晰易读。 

也可能你重构了该函数的内部实现， 使其内容和其名称变得同样清晰。

若果真如此， 你就应该去掉这个函数， 直接使用其中的代码。

	- 
另一种需要使用内联函数的情况是： 
我手上有一群组织不甚合理的函数。

可以将它们都内联到一个大型函数中， 再以我喜欢的方式重新提炼出小函数。

	- 如果代码中有太多间接层， 使得系统中的所有函数都似乎只是对另一个函数的简单委托， 造成我在这些委托动作之间晕头转向， 

那么我通常都会使用内联函数。

- 做法

	- 检查函数， 确定它不具多态性
(如果他再父类里，子类有继承，就不要内联)
	- 找出这个函数的所有调用点，将这个函数的所有调用点都替换为函数本体。
每次替换之后， 执行测试。
然后删除函数定义

### 提炼变量：
曾用名：引入解释型变量
反向重构： 内联变量

- 动机

	- 表达式有可能非常复杂而难以阅读。 
这种情况下， 局部变量可以帮助我们将表达式分解为比较容易管理的形式。 
	- 在面对一块复杂逻辑时， 局部变量使我能给其中的一部分命名， 
这样我就能更好地理解这部分逻辑是要干什么
	- 提炼变量的上下文宽度：

		- 如果这个名字只在当前的函数中有意义， 那么提炼变量是个不错的选择
		-  但如果这个变量名在更宽的上下文中也有意义， 我就会考虑将其暴露出来， 通常以函数的形式
		- 如果在更宽的范围
可以访问到这个名字， 就意味着其他代码也可以用到这个表达式， 而不用把它重写一遍， 这样能减少重复， 并且能更好地表达我的意图

			- 将变量名变得更宽的缺点：更多的工作量

				- 暂时搁下这个想法
				- 稍后再用以查询取代临时变量（178） 来处理它
				- 但如果处理其他很简单， 我就会立即动手， 这样马上就可以使用这个新名字。
				- 有一个好的例子： 如果我处理的这段代码属于一个类， 对这个新的变量使用提炼函数（106） 会很容易

- 做法

	- 确认要提炼的表达式没有副作用。

	- 声明一个不可修改的变量， 
把你想要提炼的表达式复制一份，
以该表达式的结果值给这个变量赋值。
	- 用这个新变量取代原来的表达式。

	- 测试

### 内联变量
曾用名： 内联临时变量（Inline Temp）
反向重构： 提炼变量（119）

- 动机

	- 在一个函数内部， 变量能给表达式提供有意义的名字， 因此通常变量是好东西。

但有时候， 这个名字并不比表达式本身更具表现力，可以直接干掉中间变量，直接使用表达式
	- 或者变量名干扰了附近的重构

- 做法

	- 检查确认变量赋值语句的右侧表达式没有副作用。

	- 如果变量没有被声明为不可修改， 先将其变为不可修改， 并执行测试。
这是为了确保该变量只被赋值一次。
	- 找到第一处使用该变量的地方， 将其替换为直接使用赋值语句的右侧表达式
	- 测试。

	- 重复上述步骤直到替换完
	- 删除该变量的定义

### 改变声明函数
别名： 函数改名（Rename Function）
曾用名： 函数改名（Rename Method）
曾用名： 添加参数（Add Parameter）
曾用名： 移除参数（Remove Parameter）
别名： 修改签名（Change Signature）

- 动机

	- 更清晰的表达函数意图
	- 解耦合/提高通用
	- 需要更多的参数信息
	- 提高封装度

- 做法

	- 简单的做法


		- 如果想要移除一个参数， 需要先确定函数体内没有使用该参数。

		- 修改函数声明， 使其成为你期望的状态。
		- 找出所有使用旧的函数声明的地方， 将它们改为使用新的函数声明。

		- 测试
		- 如果又要改名，又要改参数
那么请分步来

	- 迁移式做法


		- 如果有必要的话， 先对函数体内部加以重构，使后面的提炼步骤易于开展。

		- 使用提炼函数， 将函数体提炼成一个新函数。如果要沿用旧函数名，新函数可以起一个临时名

		- 如果提炼出的函数需要新增参数， 用前面的简单做法添加即可.
测试。

		- 对旧函数使用内联函数（115） 。
如果新函数使用了临时的名字， 再次使用改变函数声明（124） 将其改回原来的名字。
测试。

### 封装变量
曾用名： 自封装字段（Self-Encapsulate Field）
曾用名： 封装字段（Encapsulate Field）

- 动机

	- 变量的可见性太大，会变得难以维护

		- 难以维护的原因：
如果我把数据搬走，就必须同时修改所有引用该数据的代码，可见性太大，引用该数据的代码就越多
		- 所以全局数据是个大麻烦

	- 能提供一个清晰的观测点， 可以由此监控数据的变化和使用情况；

我还可以轻松地添加数据被修改时的验证或后续
	- 只要它的作用域超出单个函数， 我就会将其封装起来， 只允许通过函数访问。
数据的作用域越大， 封装就越重要。
	- 不可变性（变量）是强大的代码防腐剂

- 做法

	- 创建封装函数， 在其中访问和更新变量值。

	- 执行静态检查。
逐一修改使用该变量的代码， 将其改为调用合适的封装函数。 每次替换之后，
执行测试。

	- 限制变量的可见性。
	- 测试。
如果变量的值是一个记录， 考虑使用封装记录

### 变量改名（Rename Variable）

- 动机

	- 变量名的长短跟他的作用域/可见域成正比。

一行lambda表达式里的变量名，起一个字母也无所谓。

对于作用域超出一次函数调用的字段， 则需要更用心命名。 这是我最花心思的地方。

- 机制

	- 如果变量被广泛使用， 考虑运用封装变量（132） 将其封装起来
	- 找出所有使用该变量的代码， 逐一修改。
	- 如果修改常量名命，则先用新的变量copy一份旧变量（const newName = oldName）,
待替换完全部使用他的地方后，删除oldName

### 引入参数对象引入参数对象（Introduce Parameter Object）

- 动机

	- 我常会看见， 一组数据项总是结伴同行， 出没于一个又一个函数。 

这样一组数据就是所谓的数据泥团， 我喜欢代之以一个数据结构


- 价值

	- 
让数据项之间的关系变得明晰。 
使用新的数据结构， 参数的参数列表也能缩短

	- 
并且经过重构之后， 所有使用该数据结构的函数都会通过同样的名字来访问其中的元素，

从而提升代码的一致性

	- 一旦识别出新的数据结构， 
我就可以重组程序的行为来使用这些结构。

 我会创建出函数来捕捉围绕这些数据的共用行为——可能只是一组共用的函数， 也可能用一个类把数据结构与使用数据的函数组合起来。

 这个过程会改变代码的概念图景， 将这些数
据结构提升为新的抽象概念， 可以帮助我更好地理解问题域

- 做法

	- 如果暂时还没有一个合适的数据结构， 
就创建一个

( 我倾向于使用类， 因为稍后把行为放进来会比较容易。 
我通常会尽量确保这些新建的数据结构是值对象 )

测试

	- 使用改变函数声明， 给原来的函数新增一个参数， 类型是新建的数据结构。
测试。
	- 调整所有调用者， 传入新数据结构的适当实例。 每修改一处， 执行测试
	- 
用新数据结构中的每项元素， 逐一取代参数列表中与之对应的参数项， 
然后删除原来的参数。 

测试

### 函数组合成类（Combine Functions into Class）

- 动机

	- 
如果发现一组函数形影不离地操作同一块数据（通常是将这块数据作为参数传递给函数） ， 

我就认为， 是时候组建一个类了。 

	- 
除了可以把已有的函数组织起来， 这个重构还给我们一个机会， 

去发现其他的计算逻辑， 将它们也重构到新的类当中

	- 使用类有一大好处： 客户端可以修改对象的核心数据， 通过计算得出的派生数据则会自动与核心数据保持一致。

- 做法

	- 运用封装记录（162） 对多个函数共用的数据记录加以封装
	- 对于使用该记录结构的每个函数， 运用搬移函数（198） 将其移入新类
	- 用以处理该数据记录的逻辑可以用提炼函数（106） 提炼出来， 并移入新类。

### 函数组合成变换
替代/相似方案：函数组合成类
区别： 
函数组合成类  可以改变源数据
函数组合成变  化不改变源数据
（无副作用，但是也有可能遭遇数据不一致）

- 动机

	- 在软件中， 经常需要把数据“喂”给一个程序， 让它再计算出各种派生信息。

这些派生数值可能会在几个不同地方用到， 因此这些计算逻辑也常会在用到派生
数据的地方重复。
	- 我更愿意把所有计算派生数据的逻辑收拢到一处， 这样始终可以在固定的地方找到和更新这些逻辑， 避免到处重复
	- 
我喜欢把函数组合起来的原因之一， 是为了避免计算派生数据的逻辑到处重复。 从道理上来说， 只用提炼函数（106） 也能避免重复，
 
但孤立存在的函数常常很难找到， 只有把函数和它们操作的数据放在一起， 用起来才方便。 引入变换（或者类） 都是为了让相关的逻辑找起来方便


- 做法

	- 创建一个变换函数， 输入参数是需要变换的记录， 并直接返回该记录的值

这一步通常需要对输入的记录做深复制（deep copy） 。 此时应该写个测试， 确保变换不会修改原来的记录
	- 挑选一块逻辑， 将其主体移入变换函数中， 把结果作为字段添加到输出记录中。 
修改客户端代码， 令其使用这个新字段。

如果计算逻辑比较复杂， 先用提炼函数（106） 提炼之。

	- 测试。
针对其他相关的计算逻辑， 重复上述步骤。


### 拆分阶段

- 动机

	- 
每当看见一段代码在同时处理两件不同的事， 我就想把它拆分成各自独立的模块， 因为这样到了需要修改的时候， 我就可以单独处理每个主题， 而不必同时在脑子里考虑两个不同的主题。

 如果运气够好的话， 我可能只需要修改其中一个模块， 完全不用回忆起另一个模块的诸般细节

	- 最简洁的拆分方法之一， 就是把一大段行为分成顺序执行的两个阶段。 可能你有一段处理逻辑， 其输入数据的格式不符合计算逻辑的要求， 所以你得先对输
入数据做一番调整， 使其便于处理。 也可能是你把数据处理逻辑分成顺序执行的
多个步骤， 每个步骤负责的任务全然不同。

- 做法

	- 将第二阶段的代码提炼成独立的函数。

	- 测试。
引入一个中转数据结构， 将其作为参数添加到提炼出的新函数的参数列表中。
测试。
	- 逐一检查提炼出的“第二阶段函数”的每个参数。 如果某个参数被第一阶段用
到， 就将其移入中转数据结构。 每次搬移之后都要执行测试。

有时第二阶段根本不应该使用某个参数。 果真如此， 就把使用该参数得到
的结果全都提炼成中转数据结构的字段， 然后用搬移语句到调用者（217） 把
使用该参数的代码行搬移到“第二阶段函数”之外
	- 对第一阶段的代码运用提炼函数（106） ， 让提炼出的函数返回中转数据结
构。

也可以把第一阶段提炼成一个变换（transform） 对象。

## 封装

## 搬移特性

## 重新组织数据

## 简化条件逻辑

## 重构API

## 处理继承关系
