//  Use a closure to create a simple module for managing a collection of items. implement method to add, remove, and list items.



function closure(){
    const Mylist = []
    return{
        Add: function(item){
            Mylist.push(item)
        },
        remove: function(item){
            const index = Mylist.indexOf(item);
            if (index > -1) {
                Mylist.splice(index, 1);
                console.log(`Removed item: ${item}`);
            } else {
                console.log(`Item not found: ${item}`);
            }
        },
        getList: function(){
            console.log("Current items in the collection:");
            Mylist.forEach((item, index) => {
                console.log(`${index + 1}: ${item}`);
            });
        }
    }
}
const myList  = closure();
myList.Add("ice");
myList.Add("land");
myList.Add("water");
myList.Add("sun");
myList.remove("water");
myList.getList();
