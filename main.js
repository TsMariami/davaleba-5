const toDoList = [] //შევქმენით მასივი სადაც მოვათავსებთ ჩვენს ობიექტს

//HTML თაგები 
const $input = document.getElementsByTagName('input')[0]
const $button = document.getElementsByTagName('button')[0]
const $ul = document.getElementsByTagName('ul')[0]

var id = toDoList.length + 1 //ობიექტს ანიჭებს აიდის

$button.addEventListener('click', addTodoItem) // ბათონს დავამატეთ კლიკ ივენთი

//დავადეკლარირეთ და გავწერეთ ფუნქცია რომლითაც ვამატებთ აითემს სიაში 
function addTodoItem() {  
    let newInput = $input.value 
    if (validateInput(newInput)) { 
        let newItem = new Object() // ახალი აითემს მივეცის ობიექტის ტიპი
        newItem.id = id //ახალი აითემის აიდი გავუტოლეთ ცვლადს
        id++
        newItem.title = $input.value //ახალი აითემის სათაური გაუტოლე ინფუტის ვალიუს
        toDoList.push(newItem) //ჩაამატე ახალი აითემი მასივში
        $input.value = '' // აითემის მასივში ჩამატების შემდეგ ინფუტის ვალიუ გაუტოლდეს ნულს, სიცარიელეს
        renderTodoList()
    } else {
        console.log('The input must be filled')
    }
}

function deleteTodoItem(id) { //გავწერეთ სიიდდან აითემის წაშლის ფუნქცია
    deleteTodoItemFromtoDoList(id) //ფუნქციაში დავადეკლარილეთ სიიდან აითემის წაშლის ფუნქცია 
    renderTodoList()  //ამავე ფუნქციაში დავადეკლარილეთ დარენდერების ფუნქცია
}

function renderTodoList() { //გავწერეთ დარენდერების ფუნქცია

    $ul.innerHTML = null //

    toDoList.forEach(item => { // for each მეთოდი 
        let li = document.createElement('li') //შევქმენით ახალი HTML ელემენტი ჯავასკრიპტის მეშვეობით
        li.innerHTML = item.title + " ID: " + item.id + " - " //ამ ელემენტის შინაარსი გავუტოლეთ აითემის სათაურს + მის აიდის
        let delButton = document.createElement('button') // შევქმენით წაშლის ბათონი HTMLში 
        delButton.innerHTML = "Delete" 
        delButton.addEventListener('click', () => { //წაშლის ბათონს დავამატეთ კლიკ ივენნთი
            deleteTodoItem(item.id) // ფუნქციაში დავადეკლარილეთ სიიდან აითემის წაშლის ფუნქცია 
        })
        li.appendChild(delButton) //წაშლის ბათონი მოვათავსეთ ლი ელემენტში
        $ul.appendChild(li) // ლი ელემენთი მოვათავსეთ ულ ელემენტში
    }
    )
}

function deleteTodoItemFromtoDoList(id) { //გავწერეთ სიიდან აითემის წაშლის ფუნქცია 
    let item = toDoList.find(value => value.id === id) //
    toDoList.splice(toDoList.indexOf(item), 1)
}

function validateInput(value) { 
    if( value !== ''){ // თუ მნიშვნელობა არ უდრის სიცარიელეს დააბრუნე true
        return true
    }else{
        return false //თუარადა false
    }

}

renderTodoList() 


