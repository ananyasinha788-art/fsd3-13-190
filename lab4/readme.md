#EXPRESS 
1.create project folder
2.go to project and open folder
3.execute 'npm init -y'
4.install 'npm i nodemon - D'
5. install `npm i rxpress`
5.open package.json
  a.change 'type:'module''
  b.update script {
  "start":"node prg1.js"
  "dev":nodemon prg1.js"
  }
  6.create prg1.js in folder 
  7. add folderNmae/node_module in .gitignore
  8.send method/function is used to revert back contents to the client , it may be html , json , html file,plain text 
  9. we can also add status code with status function , it can be chain with send function .



## MAP -
1. THIS function is used to iterate any array , it must return new array 
```
array.map((item)=>{
  return
})
array.map((item)=> ())
   

```
in first syntax we have to use explicit return key word where as in syntax 2 does not required.
exclude number of properties from any json object 
```
const {p1,p2,...rest}=product;
log(rest)
```


## search - to serach any item in json array we use find method it willl return null on unsicessful or object on successful . 
array.find((item)=> item.id===id);