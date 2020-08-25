let list = document.querySelector('#components-list');

let allComponents = [];

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


//TEST TO TRY DELETE COMPONENT FROM SETTINGS
btnToDeleteFromSettings = document.createElement('button');
btnToDeleteFromSettings.className = 'delete-item-from-settings';

btnToDeleteFromSettings.innerHTML = 'Remove';
li.appendChild(btnToDeleteFromSettings);
list.appendChild(li);
allComponents.push(componentInput.value);
//clear input
componentName = componentInput.value;
componentInput.value = '';

let reloadSelectList = document.querySelectorAll('.choose-components');
for (let i = 0; i < reloadSelectList.length; i++) {
  optionSelect = document.createElement('option');
  optionSelect.className = componentName + '-option';
  optionSelect.appendChild(document.createTextNode(componentName));
  reloadSelectList[i].append(optionSelect);
}

btnToDeleteFromSettings.addEventListener('click', removeComponent);
}  

//remove component input

function removeComponent(e) {
  
  e.target.parentElement.remove();
  let componentNameFromSettingsToDelete = e.target.parentElement.id;
  console.log(componentNameFromSettingsToDelete);
  deleteComponentsFromApplication(componentNameFromSettingsToDelete);
  
  getOptionsToRemove = document.querySelectorAll('.' + componentNameFromSettingsToDelete + '-option').forEach(function(component){
    component.remove();
  })

  // deleteFromApplicationComponent = document.querySelectorAll('.choose-components');
  // for(let i = 0; i < deleteFromApplicationComponent.length; i++){
    
  //     deleteFromApplicationComponent[i].remove(deleteFromApplicationComponent[i].selectedIndex);
  //     console.log(deleteFromApplicationComponent[i]);
    
  // }

}

function deleteComponentsFromApplication(componentNameFromSettingsToDelete) {

 for(let i = 0; i < allRooms.length; i++){
   room = allRooms[i];
    deleteSpanWithTemp = document.querySelector('.span-toshow-temperature-' + room.name);
     room.roomComponents.forEach(function(a){
  
     if(a.name === componentNameFromSettingsToDelete){
      componentFromMenu = document.querySelectorAll('.span-' + room.name +'-'+ a.name ).forEach(function(el){
        console.log(el);
        console.log(componentNameFromSettingsToDelete);
        console.log(a.name);
        el.remove();
        if(componentNameFromSettingsToDelete.toLowerCase() === 'conditioner'){
          deleteSpanWithTemp.remove()
        }
       })
      }
     
   })
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

class Conditioner extends Components {
  constructor(name, status, temperature) {
    super();
    this.name = name;
    this.status = status;
    this.temperature = temperature;
  }
}

//SHOW ALL ROOMS IN UI
function showAllRoomsInUi() {
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

// show ADD button in Menu

function showButtonForAddingNewComponent(room) {
  let btn = document.createElement('input');
  btn.className = 'add-components';
  btn.id = `${room.name}-btn`;
  btn.value = 'ADD';
  btn.type = 'Submit';
  let roomNameLi = document.querySelector(`.${room.name}`);
  roomNameLi.appendChild(btn);
}

showAllRoomsInUi();

//add event listenrs to ADD button room object

let btnAddComponentToRoomsObject = document.querySelectorAll('.add-components');
for (let i = 0; i < btnAddComponentToRoomsObject.length; i++) {
  btnAddComponentToRoomsObject[i].addEventListener('click', function () {
    //create delete Btn for componentLine for room objects
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'component-delete';
    deleteBtn.innerHTML = 'DELETE';

    switch (this.id) {
      case 'Kitchen-btn':
        const kitchenUl = document.querySelector('.Kitchen-components');

        newLineComponentKitchen = document.createElement('li');
      
        
        let kitchenComponent = createComponent('Kitchen-select', newLineComponentKitchen ); // функція яка перевіряє умову кондиціонера і інших компонентів
        newLineComponentKitchen.className =
          kitchen.name + '-' + kitchenComponent.name;
        kitchen.roomComponents.push(kitchenComponent);
        spanInMenuObject = document.createElement('span');
        spanInMenuObject.className = `span-${kitchen.name}-${kitchenComponent.name} span-style`;
        kitchenUl.appendChild(spanInMenuObject);
        spanInMenuObject.appendChild(newLineComponentKitchen);
        addComponentToMainGridBlocks('kitchen-components-grid',kitchenComponent,kitchen,
        'Kitchen-Conditioner-input-number-box', 'span-toshow-temperature-Kitchen'); // fucntion to add components also to Grid View

        spanInMenuObject.appendChild(deleteBtn);
        removeAddedComponentFromSelect('Kitchen-select'); // delete component from select when being added to UI list

        //add delete button functionality to our added components
        deleteBtn.id = kitchenComponent.name;
        deleteBtn.addEventListener('click', function(){
          deleteComponentFromMenuAndGrid(kitchen, kitchenComponent, 'Kitchen-select')});

        break;
      case 'LivingRoom-btn':
        const livingRoomUl = document.querySelector('.LivingRoom-components');
        newLineComponentLiving = document.createElement('li');

        let livingRoomComponent = createComponent('LivingRoom-select', newLineComponentLiving )
        newLineComponentLiving.className = livingRoom.name + '-' + livingRoomComponent.name;
       
        spanInMenuObject = document.createElement('span');
        spanInMenuObject.className = `span-${livingRoom.name}-${livingRoomComponent.name} span-style`;
        livingRoomUl.appendChild(spanInMenuObject);
        livingRoom.roomComponents.push(livingRoomComponent);
        spanInMenuObject.appendChild(newLineComponentLiving);
        spanInMenuObject.appendChild(deleteBtn);
        addComponentToMainGridBlocks('livingRoom-components-grid',livingRoomComponent, livingRoom, 
        'LivingRoom-Conditioner-input-number-box','span-toshow-temperature-LivingRoom');

        removeAddedComponentFromSelect('LivingRoom-select');
        //add delete button functionality to our added components
        deleteBtn.id = livingRoomComponent.name;
        deleteBtn.addEventListener('click', function(){
          deleteComponentFromMenuAndGrid(livingRoom, livingRoomComponent, 'LivingRoom-select')});// how it was, see in test file
      
       
        break;

      case 'Bedroom-btn':
        const bedroomUl = document.querySelector('.Bedroom-components');
        newLineComponentBedroom = document.createElement('li');

        let bedroomComponent = createComponent('Bedroom-select', newLineComponentBedroom);

        newLineComponentBedroom.className = bedroom.name + '-' + bedroomComponent.name;
        spanInMenuObject = document.createElement('span');
        spanInMenuObject.className = `span-${bedroom.name}-${bedroomComponent.name} span-style`;
        bedroomUl.appendChild(spanInMenuObject);
        bedroom.roomComponents.push(bedroomComponent);
        spanInMenuObject.appendChild(newLineComponentBedroom);
        spanInMenuObject.appendChild(deleteBtn);
        addComponentToMainGridBlocks('bedroom-components-grid', bedroomComponent, bedroom,
        'Bedroom-Conditioner-input-number-box', 'span-toshow-temperature-Bedroom');
        
        removeAddedComponentFromSelect('Bedroom-select');
        deleteBtn.id = bedroomComponent.name;
        deleteBtn.addEventListener('click', function(){
          deleteComponentFromMenuAndGrid(bedroom, bedroomComponent, 'Bedroom-select')})
      
        
        break;
      case 'Bathroom-btn':
        const bathroomUl = document.querySelector('.Bathroom-components');
        newLineComponentBathroom = document.createElement('li');

        let bathroomComponent = createComponent('Bathroom-select', newLineComponentBathroom);

        bathroom.roomComponents.push(bathroomComponent);
        newLineComponentBathroom.className = bathroom.name + '-' + bathroomComponent.name;
        spanInMenuObject = document.createElement('span');
        spanInMenuObject.className = `span-${bathroom.name}-${bathroomComponent.name} span-style`;
        spanInMenuObject.appendChild(newLineComponentBathroom);
        spanInMenuObject.appendChild(deleteBtn);
        bathroomUl.appendChild(spanInMenuObject);
        addComponentToMainGridBlocks('bathroom-components-grid',bathroomComponent, bathroom,
       'Bathroom-Conditioner-input-number-box',  'span-toshow-temperature-Bathroom');
        
       removeAddedComponentFromSelect('Bathroom-select');
       deleteBtn.id = bathroomComponent.name;
        deleteBtn.addEventListener('click', function(){
          deleteComponentFromMenuAndGrid(bathroom, bathroomComponent, 'Bathroom-select')})
       
        break;
      case 'Hallway-btn':
        const hallwayUl = document.querySelector('.Hallway-components');
        newLineComponentHallway = document.createElement('li');
        let hallwayComponent = createComponent('Hallway-select', newLineComponentHallway);
        newLineComponentHallway.className = hallway.name + '-' + hallwayComponent.name;
        spanInMenuObject = document.createElement('span');
        spanInMenuObject.className = `span-${hallway.name}-${hallwayComponent.name} span-style`;
        spanInMenuObject.appendChild(newLineComponentHallway);
        spanInMenuObject.appendChild(deleteBtn);
        hallway.roomComponents.push(hallwayComponent);
        hallwayUl.appendChild(spanInMenuObject);
        
        addComponentToMainGridBlocks('hallway-components-grid', hallwayComponent, hallway,
        'Hallway-Conditioner-input-number-box', 'span-toshow-temperature-Hallway');

        removeAddedComponentFromSelect('Hallway-select');
        deleteBtn.id = hallwayComponent.name;
        deleteBtn.addEventListener('click', function(){
          deleteComponentFromMenuAndGrid(hallway, hallwayComponent, 'Hallway-select')})
        break;
    }
  });
}



function addComponentToMainGridBlocks( idOfUlListBelongsToKitchenObject, roomComponentObject,roomObject,classNameofConditionerInputBox,classNameForSpanShowTemperatureInGrid){
  roomGridList = document.getElementById(idOfUlListBelongsToKitchenObject); // дістаємо головний грід напркилад Кухня = id in HTML
  componentLiElement = document.createElement('li');
  spanGrid = document.createElement('span');
  spanGrid.className = `span-${roomObject.name}-${roomComponentObject.name} span-style`;
  roomGridList.appendChild(spanGrid);
  componentLiElement.className = roomObject.name + '-' + roomComponentObject.name;
  componentLiElement.appendChild(
    document.createTextNode(
      `${roomComponentObject.name} ${roomComponentObject.status}`
    )
  );

  spanGrid.appendChild(componentLiElement);
//create label for checkbox
  labelForCheckBox = document.createElement('label');
  labelForCheckBox.className = roomObject.name + '-' + roomComponentObject.name + '-label';
  spanGrid.appendChild(labelForCheckBox)
  checkboxGrid = document.createElement('input');
  checkboxGrid.type = 'checkbox';
  checkboxGrid.value = roomComponentObject.status;
  let checkBoxGridClass = roomObject.name + '-' + roomComponentObject.name + '-checkbox';
  checkboxGrid.className = checkBoxGridClass;
  
  checkboxGrid.onclick = function () {
    checkBoxFunctionality(checkBoxGridClass, roomComponentObject, roomObject);
  };
  spanGrid.appendChild(checkboxGrid);
  
  inputNumberBox = document.createElement('input');
  if(roomComponentObject.name.toLowerCase() === 'conditioner'){
    inputNumberBox.type = 'number';
    inputNumberBox.style.visibility = "hidden";

    inputNumberBox.className = roomObject.name + '-'+roomComponentObject.name +'-input-number-box ';
    spanGrid.appendChild(inputNumberBox);
    setTemperatureBtn = document.createElement('input');
    setTemperatureBtn.className = roomObject.name + '-btn-to-set-temp'
    setTemperatureBtn.type = 'submit';
    setTemperatureBtn.value = 'Set';
    setTemperatureBtn.style.visibility = "hidden";
    setTemperatureBtn.onclick = function(){
      showTemperatureOnGrid(classNameofConditionerInputBox, classNameForSpanShowTemperatureInGrid);
    }
    spanGrid.appendChild(setTemperatureBtn);

    spanToShowTemperature = document.createElement('span');
    spanToShowTemperature.style = 'font-size: 20px';
    spanToShowTemperature.className = 'span-toshow-temperature-' + roomObject.name;
    roomGridList.appendChild(spanToShowTemperature);
  }

  
}

function showTemperatureOnGrid(classNameofConditionerInputBox,classNameForSpanShowTemperatureInGrid ){
  let inputOfTemperatureNumber = document.querySelector('.' + classNameofConditionerInputBox).value;
  spanToShowTemperatureAfterBeingSet = document.querySelector('.' + classNameForSpanShowTemperatureInGrid)
  if (inputOfTemperatureNumber > 40 || inputOfTemperatureNumber < 18){
    spanToShowTemperatureAfterBeingSet.innerHTML = 'Temperature ' + 22;
  }else{
    spanToShowTemperatureAfterBeingSet.innerHTML = 'Temperature '+ inputOfTemperatureNumber;
  }
  
}

// add functionality to checkbox - on/off

function checkBoxFunctionality(checkBoxGridClass,roomComponentObject, roomObject) {
  
  let checkboxGridInputElement = document.querySelector( '.' + checkBoxGridClass);
  let changeStatusOfLiElementOfRoomObject = document.querySelectorAll('.' + roomObject.name + '-' + roomComponentObject.name);
  changeVisibilityOfSetButtons = document.querySelector('.' + roomObject.name + '-btn-to-set-temp');
  inputNumberMakeVisible = document.querySelector('.' + roomObject.name + '-'+roomComponentObject.name +'-input-number-box ');
  if (checkboxGridInputElement.checked === true) {
    roomComponentObject.status = 'ON';
    if(roomComponentObject.name.toLowerCase() === 'conditioner'){
      changeVisibilityOfSetButtons.style.visibility = "visible";
      inputNumberMakeVisible.style.visibility = 'visible';
    }

    changeStatusOfLiElementOfRoomObject.forEach(function (a) {
      a.innerHTML = roomComponentObject.name + ' ' + roomComponentObject.status;
    });
   
  }
  if (!checkboxGridInputElement.checked) {
    roomComponentObject.status = 'OFF';
    // spanToShowTemperatureAfterBeingSet.textContent = '';
    if(roomComponentObject.name.toLowerCase() === 'conditioner'){
      changeVisibilityOfSetButtons.style.visibility = "hidden";
      inputNumberMakeVisible.style.visibility = "hidden";
      inputNumberMakeVisible.value = '';
      document.querySelector('.span-toshow-temperature-' + roomObject.name).innerHTML = '';
    }
    changeStatusOfLiElementOfRoomObject.forEach(function (a) {
      a.innerHTML = roomComponentObject.name + ' ' + roomComponentObject.status;
    });
  }
 
}

//function to create component in Room objects
function createComponent(idOfSelectListInRoomObject, newLineComponentRoomObject) {
  let roomObejctSelectList = document.getElementById(idOfSelectListInRoomObject);
  // let newLineComponentRoomObject = document.querySelector('.'+ classOfNewLineComponentRoomObject)
  let componentNameForRoomObject =
    roomObejctSelectList.options[roomObejctSelectList.selectedIndex].innerHTML; // choose component content from select
  let roomObjectComponent;
  if (componentNameForRoomObject.toLowerCase() === 'conditioner') {
    roomObjectComponent = new Conditioner('Conditioner', 'OFF', '22');
    newLineComponentRoomObject.appendChild(
      document.createTextNode(
        `${roomObjectComponent.name} ${roomObjectComponent.status} ${roomObjectComponent.temperature}`));
 
  } else {
    roomObjectComponent = new Components(componentNameForRoomObject, 'OFF'); // create component object for kitchen
    newLineComponentRoomObject.appendChild(
      document.createTextNode(
        `${roomObjectComponent.name} ${roomObjectComponent.status}`));
  }
  return roomObjectComponent;
}


function deleteComponentFromMenuAndGrid(roomObject, roomComponentObject, idOfRoomObjectSelect) {
          
  for (let j = 0; j < roomObject.roomComponents.length; j++) {
    if (roomObject.roomComponents[j].name === roomComponentObject.name) {
      roomObject.roomComponents.splice(j, 1);
      document.querySelectorAll(`.span-${roomObject.name}-${roomComponentObject.name}`).forEach(function (a) {
          
          spanToShowTemperatureDelete = document.querySelector('.span-toshow-temperature-' + roomObject.name);
          a.remove();

        });
        if(roomComponentObject.name === 'Conditioner'){
          spanToShowTemperatureDelete.remove(spanToShowTemperatureDelete) // delete field which show Temperature
        }
        
        // to add to select list element after deleted it from Grid
          roomObejctSelectList = document.getElementById(idOfRoomObjectSelect)
          optionCreateOfDeletedElement = document.createElement('option');
          optionCreateOfDeletedElement.className = roomComponentObject.name + '-option';
          optionCreateOfDeletedElement.appendChild(document.createTextNode(roomComponentObject.name));
          roomObejctSelectList.appendChild(optionCreateOfDeletedElement);
    }
  }
};

function removeAddedComponentFromSelect(idOfSelectList){
  let removeComponentFromSelect = document.getElementById(idOfSelectList);
  removeComponentFromSelect.remove(removeComponentFromSelect.selectedIndex);
  
}

