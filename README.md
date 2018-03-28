# learnNode
## HOW NODEJS WORK
Javascript Code We Write(100% JS)

Node JS(50% JS 50% C++)

V8(outside browser 30% JS 70% C++)   libuv(C++ 100% undelying networking concurrency file system)

http fs crypto path library in Node, implemented inside of the libuv

Node standard library 

Where it is implemented in Node source code

how v8 and libuv are used to implement

pbkdf2 function in crypto library
password salt other options -> function pbkdf2 -> hash

lib folder 

process.binding() -> connects js and c++ functions

V8  converts values between js ans c++

src folder C++ side

libuv -> give node easy access to underlying OS

https://stackoverflow.com/questions/37916949/what-is-process-bindingfs-in-fs-js




## Evenet Loop
os system 'process' hava many threads  

Activity Monitor   Threads  Processes

OS Scheduler decides which thread should be processed

Multiple CPU code

muti-threading tech enable 

one thread  Event Loop


Node Event Loop -> Single Threated(not good for multiple CPU)
Some of Node Framework/Std Lib -> Not Single Threaded