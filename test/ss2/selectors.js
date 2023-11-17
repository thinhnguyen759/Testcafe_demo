import { Selector } from 'testcafe';

const elementWithId = Selector(id =>{
    return document.getElementById(id);
});

const persistenId = 'item-3';

const element = Selector(() => {
    return document.getElementById(persistenId);
}, {
    dependencies: { persistenId }
});

fixture `SELECTOR_SESSION`
.page `https://demoqa.com/text-box`
test
.skip
('Single Selector Example', async t => {

    console.log('------------');
    console.log('Single Selector Example');
    const webTableLi = Selector('#item-3');

    await t
    .click(webTableLi)
    .wait(5000)

    const headerSelector = Selector('.main-header');
    const headerString = await headerSelector.innerText;
    
    console.log('Header String: ' + headerString);
});

test
.skip
('Function parameter selector example', async t =>{
    
    console.log('----------');
    console.log('Function parameter selector example');

    await t
    .click(elementWithId('item-2'))
    .wait(5000)

    const headerSelector = Selector ('.main-header');
    const headerString = await headerSelector.innerText;

    console.log('header string: ' + headerString);
});

test
.skip
('Options.Dependency selector example', async t =>{

    console.log('-----------');
    console.log('Options.Dependency selector example');

    await t
    .click(element)
    .wait(5000)

    const headerSelector = Selector(' .main-header');
    const headerString = await headerSelector.innerText;

    console.log('Header string: ' + headerString);
})
test
.skip
('child selector exampple', async t =>{
    console.log('-----------');
    console.log('child Selector Example');

    const checkboxChildren =Selector ('ul').child(2);
    await t
    .click(checkboxChildren)
    .wait(5000)

    const headerSelector =Selector ('.main-header');
    const headerString = await headerSelector.innerText;

    console.log('header string: ' + headerString);
});
test
.skip
('count & click selector example', async e =>{

    console.log ('--------------');
    console.log('Count & click selector example');

    await e
    .click(elementWithId('item-1'))
    .click('#tree-node > ol > li > span > button')
    .wait(5000)

    const checkboxSelector = Selector ('ol li .rct-node-collapsed span label .rct-checkbox')
    const counter = await checkboxSelector.count;

    console.log('check box found: ' + counter);

    for(let i=0; i<counter; i++){
        await e
        .click(checkboxSelector.nth(i));
    }
    await e
    .wait(5000)

    const textDisplayedSelector = Selector('#result')
    const result = await textDisplayedSelector.innerText
    console.log(result)

}); 
test
.skip
('with Attribute Selector', async e =>{

    console.log ('--------------');
    console.log('with Attribute Selector');

    const webTableLi = Selector('#item-3');

    await e
    .click(webTableLi)
    .wait(3000)

    const elementByAttrSelector = Selector('button').withAttribute('id', 'addNewRecordButton')

    await e
    .click(elementByAttrSelector)
    .wait(3000)

    const headerSelector = Selector('#registration-form-modal');
    const headerString = await headerSelector.innerText;
    console.log('Header string: ' + headerString);

}); 

test
.skip
('with Exact Text Selector', async e =>{

    console.log ('--------------');
    console.log('with Exact Text Selector');

    const webTableLi = Selector('#item-3');

    await e
    .click(webTableLi)
    .wait(3000)

    const elementByAttrSelector = Selector('button').withExactText('Add');

    await e
    .click(elementByAttrSelector)
    .wait(3000)

    const headerSelector = Selector('#registration-form-modal');
    const headerString = await headerSelector.innerText;
    console.log('Header string: ' + headerString);

}); 
