import { Selector } from 'testcafe';

const elementWithId = Selector(id =>{
    return document.getElementById(id);
});

const persistenId = 'item-4';

const element = Selector(() => {
    return document.getElementById(persistenId);
}, {
    dependencies: { persistenId }
});

fixture `SELECTOR_SESSION`
.page `https://demoqa.com/text-box`
// test
// .skip
// ('check state', async t=>{
//     //khai bao cac bien
//     const itemToBeClicked = Selector('#item-1');
//     const testCheckBoxSpan = Selector('.rct-checkbox');
//     const testCheckBoxElement = Selector('#tree-node-home');

//     //kiem tra trang thai checkbox
//     await t
//     .click(itemToBeClicked)
//     .wait(2000);

//     let unCheckedNodeStatus = await testCheckBoxElement.checked;
//     console.log('Node Status: '+ unCheckedNodeStatus)

//     //nhan vao check box
//     await t
//     .click(testCheckBoxSpan)
//     .wait(2000);
//      let CheckedNodeStatus = await testCheckBoxElement.checked;
//      console.log('Node status: ' + CheckedNodeStatus)
// });
// test //kiem tra xem trong bien co duoc dinh kem gi khong
// .skip
// ('Get classes', async t =>{
//     const itemToBeChecked = Selector('#item-1');
//     const arrowToggleButton = Selector('.rct-collapse');
//      await t 
//     .click(itemToBeChecked)
//     .wait(3000);
    
//     let cotepdinhkemkhong = await arrowToggleButton.classNames;
//     console.log(cotepdinhkemkhong);

// });
// test
// .skip
// ('Get Inner Text', async t =>{
//     const itemBoxClicked = Selector('#item-1');
//     const homeFolderElement = Selector('.rct-title');
    
//     await t
//     .click(itemBoxClicked)
//     .wait(3000);

//     let text = await homeFolderElement.innerText
//     console.log('Text from the element: ' + text);
// })
// test
// .skip
// ('Get style', async t =>{
//     const itemToBeClicked = Selector('#item-1');
//     const iconElement = Selector('.rct-icon-parent-close');

//     await t
//     .click(itemToBeClicked)
//     .wait(3000);

//     let iconstyle = await iconElement.getStyleProperty('color')
//     console.log('icon color: ' + iconstyle);
// });
// test
// .skip
// ('Check for the presence of child elements', async t => {
//     const parentElement = Selector('#item-1');

//     const childElementCount = await parentElement.find('#tree-node').count;
//     await t
//     .click(parentElement)
//     .wait(3000);
//     if (childElementCount) {
//         console.log('The element has child elements.');
//     } else {
//         console.log('The element does not have any child elements.');
//     }
// });
 
test
('right click', async t =>{
    const itemBoxClicked = Selector('#item-4');
    const rightClick = Selector ('#rightClickBtn');
    const mess = Selector('#rightClickMessage');

    await t
    .click(itemBoxClicked)
    .rightClick(rightClick)
    let messRight = await mess.innerText
    console.log(messRight);
    
} )