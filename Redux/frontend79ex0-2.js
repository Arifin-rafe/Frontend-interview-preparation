const arr = [100,500,700,800,200]

const res =''
for (let i=0; i<arr.length; i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j] == '1500'){
            res = arr[i],arr[j];
        }
    }
}
console.log(res)

const arr2 =[1,2,3,4,5]
const ress = arr2.filter((x)=>x>3)
console.log(ress)