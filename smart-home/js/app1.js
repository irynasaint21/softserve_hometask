let list = document.querySelector('#components-list');
console.log(list);

let allComponents = ['dupcia', 'hello'];

let btnAddComp = document.getElementById('btnCreate');
btnAddComp.addEventListener('click', addComponent);
let componentInput = document.getElementById('component-input');

// add component to the list(ul)
function addComponent() {
  //validate the input
  if (componentInput.value === '' || !componentInput.value.trim()) {
    componentInput.value = '';
    throw new Error('error');
  }
  li = document.createElement('li');
  li.id = componentInput.value;
  li.className = 'created-components';

  li.appendChild(document.createTextNode(componentInput.value));

  //create new link element
  const link = document.createElement('a');
  link.className = 'delete-item secondary content';
  link.innerHTML = '<span class="fa fa-remove"></span>';
  li.appendChild(link);
  list.appendChild(li);
  allComponents.push(componentInput.value);
  //clear input
  let componentName = componentInput.value;
  componentInput.value = '';

  let reloadSelectList = document.querySelectorAll('.choose-components');
  for (let i = 0; i < reloadSelectList.length; i++) {
    optionSelect = document.createElement('option');
    optionSelect.className = componentName + '-option';
    optionSelect.appendChild(document.createTextNode(componentName));
    reloadSelectList[i].append(optionSelect);
  }
}


//remove component input

list.addEventListener('click', removeComponent);

function removeComponent(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    e.target.parentElement.parentElement.remove(); // targeting the li element, where X locates
  }
}

// dropdown
const settingBtn = document.querySelector('.setting-option');
settingBtn.addEventListener('click', openSettings);

function openSettings() {
  let compList = document.querySelector('#components-list');
  compList.classList.toggle('active');
}

//  CREATE CLASSES

class Room {
  constructor(name) {
    this.name = name;
  }
  roomComponents = [];
}

const kitchen = new Room('Kitchen');
const livingRoom = new Room('LivingRoom');
const bedroom = new Room('Bedroom');
const bathroom = new Room('Bathroom');
const hallway = new Room('Hallway');

const allRooms = [kitchen, livingRoom, bedroom, bathroom, hallway];
const listRoom = document.querySelector('.all-rooms');

class Components {
  constructor(name, status) {
    this.name = name;
    this.status = status;
  }
}

// const component2 = new Components('temperature', " off");

// kitchen.roomComponents.push(component1);
// kitchen.roomComponents.push(component2);

//SHOW ALL ROOMS IN UI
function test() {
  for (let i = 0; i < allRooms.length; i++) {
    let room = allRooms[i];
    li = document.createElement('li');
    li.className = room.name;
    li.appendChild(document.createTextNode(`${room.name} `));
    listRoom.appendChild(li);
    ul = document.createElement('ul');
    ul.className = `${room.name}-components`;
    li.appendChild(ul);

    let roomComponents = allRooms[i].roomComponents;

    //show all room components
    for (let j = 0; j < roomComponents.length; j++) {
      let component = roomComponents[j];
      let li1 = document.createElement('li');
      li1.className = component.name;
      li1.appendChild(document.createTextNode(`${component.name}`));
      let ulClassName = document.querySelector(`.${room.name}-components`);
      ulClassName.appendChild(li1);
    }

    //show select list of created compoonents

    let selectElement = document.createElement('select');
    selectElement.className = 'choose-components';
    selectElement.id = `${room.name}-select`;
    let roomNameLiEL = document.querySelector(`.${room.name}`); // roomNameLiEL = roomNameLi
    roomNameLiEL.appendChild(selectElement);

    showButtonForAddingNewComponent(room);
  }
}
// create options in select list from array allComponents

// for (let k = 0; k < allComponents.length; k++) {
//   optionSelect = document.createElement('option');
//   let componentName = allComponents[k];

//   optionSelect.className = componentName;
//   optionSelect.appendChild(document.createTextNode(componentName));
//   // selectElement.appendChild(optionSelect);

// show add button

function showButtonForAddingNewComponent(room) {
  let btn = document.createElement('input');
  btn.className = 'add-components';
  btn.id = `${room.name}-btn`;
  btn.value = 'ADD';
  btn.type = 'Submit';
  let roomNameLi = document.querySelector(`.${room.name}`);
  roomNameLi.appendChild(btn);
}

// showSelectListOfCreatedComponents(){

test();

//add event listenrs to ADD button room object

let btnAddComponentToRoomsObject = document.querySelectorAll('.add-components');
for (let i = 0; i < btnAddComponentToRoomsObject.length; i++) {
  btnAddComponentToRoomsObject[i].addEventListener('click', function () {
    //create delete Btn for componentLine for room objects
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'component-delete';
    deleteBtn.innerHTML = 'delete';
    
    switch (this.id) {
      case 'Kitchen-btn':
        const kitchenUl = document.querySelector('.Kitchen-components');
        
        newLineComponentKitchen = document.createElement('li');
        let kitchenSelect = document.getElementById('Kitchen-select'); //reach for the KitchenSelect list
        let componentNameForKitchen =
          kitchenSelect.options[kitchenSelect.selectedIndex].innerHTML; // choose component content from select
        const kitchenComponent = new Components(componentNameForKitchen, 'off'); // create component object for kitchen
        newLineComponentKitchen.appendChild(
          document.createTextNode(`${kitchenComponent.name} ${kitchenComponent.status}`));
          newLineComponentKitchen.classList = kitchenComponent.name;
        kitchen.roomComponents.push(kitchenComponent);
        console.log(kitchen);
        kitchenUl.appendChild(newLineComponentKitchen);
        addComponentToMainGridBlocks('#kitchen-components-grid', kitchenComponent, kitchen);

        newLineComponentKitchen.appendChild(deleteBtn)
        
        //add delete button functionality to our added components
        deleteBtn.id = kitchenComponent.name;// double check how(id/className) i will delete the the li element
       
        deleteBtn.addEventListener('click', function(){
          
          for (let j = 0; j<kitchen.roomComponents.length; j++){
          if (kitchen.roomComponents[j].name === kitchenComponent.name){
            kitchen.roomComponents.splice(j,1);
            // deleteBtn.parentElement.remove();

            // let deleteComponentFromObjectAndGrid = document.querySelectorAll('.' + kitchenComponent.name);
            // for(let k = 0; k < deleteComponentFromObjectAndGrid.length; k++){
            //     deleteComponentFromObjectAndGrid[k].remove();
            // }
            document.querySelectorAll('.' + kitchenComponent.name).forEach(function(a) {
              console.log(a)
              a.remove()
            })
            // debugger;
            console.log(kitchen)
          }
        }
           
          
        // e.preventDefault();  
       });
      
        break;
      case 'LivingRoom-btn':
        const livingRoomUl = document.querySelector('.LivingRoom-components');
        newLineComponentLiving = document.createElement('li');
        const livingRoomSelect = document.getElementById('LivingRoom-select');
        const componentNameForLiving =
          livingRoomSelect.options[livingRoomSelect.selectedIndex].innerHTML;
        const livingRoomComponent = new Components(componentNameForLiving,'off');
        newLineComponentLiving.appendChild(document.createTextNode(
            `${livingRoomComponent.name} ${livingRoomComponent.status}`
          )
        );
        livingRoom.roomComponents.push(livingRoomComponent);
        livingRoomUl.appendChild(newLineComponentLiving);
        console.log(livingRoom);
        // newLineComponentLiving.appendChild(deleteBtn);
        break;
      case 'Bedroom-btn':
        const bedroomUl = document.querySelector('.Bedroom-components');
        newLineComponentBedroom = document.createElement('li');
        const bedroomSelect = document.getElementById('Bedroom-select');
        const componentNameForBedroom =
          bedroomSelect.options[bedroomSelect.selectedIndex].innerHTML;
        const bedroomComponent = new Components(componentNameForBedroom, 'off');
        newLineComponentBedroom.appendChild(
          document.createTextNode(
            `${bedroomComponent.name} ${bedroomComponent.status}`));
        bedroom.roomComponents.push(bedroomComponent);
        bedroomUl.appendChild(newLineComponentBedroom);
        console.log(bedroom);
        // newLineComponentBedroom.appendChild(deleteBtn);
        break;
      case 'Bathroom-btn':
        const bathroomUl = document.querySelector('.Bathroom-components');
        newLineComponentBathroom = document.createElement('li');
        const bathroomSelect = document.getElementById('Bathroom-select');
        const componentNameForBathroom =
          bathroomSelect.options[bathroomSelect.selectedIndex].innerHTML;
        const bathroomComponent = new Components(
          componentNameForBathroom, 'off');
        newLineComponentBathroom.appendChild(
          document.createTextNode(`${bathroomComponent.name} ${bathroomComponent.status}`));
        bathroom.roomComponents.push(bathroomComponent);
        bathroomUl.appendChild(newLineComponentBathroom);
        console.log(bathroom);
        // newLineComponentBathroom.appendChild(deleteBtn);
        break;
      case 'Hallway-btn':
        const hallwayUl = document.querySelector('.Hallway-components');
        newLineComponentHallway = document.createElement('li');
        const hallwaySelect = document.getElementById('Hallway-select');
        const componentNameForHallway =
          hallwaySelect.options[hallwaySelect.selectedIndex].innerHTML;
        const hallwayComponent = new Components(componentNameForHallway, 'off');
        newLineComponentHallway.appendChild(
          document.createTextNode(`${hallwayComponent.name} Status: ${hallwayComponent.status}`));
        hallway.roomComponents.push(hallwayComponent);
        hallwayUl.appendChild(newLineComponentHallway);
        
        // newLineComponentHallway.appendChild(deleteBtn);
        break;
    }
  });
  
}






// ADD event listeners to button delete of components from room object


function addComponentToMainGridBlocks(idOfUlListBelongsToKitchenObject, roomComponentObject, roomObject){
  let roomGridList = document.querySelector(idOfUlListBelongsToKitchenObject);// дістаємо головний грід напркилад Кухня
  componentLiElement = document.createElement('li');
  spanGrid = document.createElement('span');
  spanGrid.className = 'span-' + roomComponentObject.name;
  roomGridList.appendChild(spanGrid);
  componentLiElement.className = roomComponentObject.name;
  componentLiElement.appendChild(document.createTextNode(`${roomComponentObject.name} ${roomComponentObject.status}`));
 
  spanGrid.appendChild(componentLiElement);
  checkboxGrid = document.createElement('input');
  checkboxGrid.type = 'checkbox';
  checkboxGrid.value = roomComponentObject.status;
  let checkBoxGridClass = roomObject.name + '-' + roomComponentObject.name + '-checkbox';
  checkboxGrid.className = checkBoxGridClass;
  checkboxGrid.onclick = function() {testFunction(checkBoxGridClass,checkboxGrid,roomComponentObject)};
  spanGrid.appendChild(checkboxGrid);
}


// add functionality to checkbox - on/off

function testFunction(checkBoxGridClass,checkboxGrid,roomComponentObject){
console.log('class' + checkBoxGridClass);
console.log(checkboxGrid)
if(checkboxGrid.checked === true){
  roomComponentObject.status = 'on';
  let changeStatusOfLiElementOfRoomObject = document.querySelectorAll('.' + roomComponentObject.name);
  // changeStatusOfLiElementOfRoomObject.textContent = roomComponentObject.name + 'LOH ' ;
  changeStatusOfLiElementOfRoomObject.forEach(function(a){
    a.innerHTML = roomComponentObject.name + 'LOH ';
  })
  console.log('loh')
 
} else {
  console.log('pidar')
}
}