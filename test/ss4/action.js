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

fixture`TestController.rightClick`
    .page`https://devexpress.github.io/testcafe/example/`;



test
.skip
('Click last checkbox', async t => {
    const lastCheckbox = Selector ('#developer-name');

    // Click will be performed on the element selected by
    // the 'getLastItem' selector.
    await t
    .rightClick(lastCheckbox)
    
    
});
test
.skip
('Press Key test', async t => {
    await t
        .click('#tried-test-cafe')
        .wait(2000)
        // pressing 'Space' imitates clicking the checkbox again
        .pressKey('space')
        .wait(2000);
});

test
.skip
('Key Presses', async t => {
    const nameInput = Selector('#developer-name');
    await t
        .typeText(nameInput, 'Peter Parker')
        .pressKey('home right . delete delete delete delete')
        .wait(3000)
        .expect(nameInput.value).eql('P. Parker')
        .wait(3000);
});

test
.skip
('Select Text', async t =>{
    const textIput = Selector('#developer-name');
    await t
    .typeText(textIput, 'John Doe')
    .wait(3000)
    .selectText('#developer-name')
    .wait(3000)
    .pressKey('delete');
});

test
.skip
('Drag test', async t => {
    const triedCheckbox = Selector('#tried-test-cafe');

    await t
        .click(triedCheckbox)
        .drag('#slider', 360, 0, { offsetX: 10, offsetY: 10 })
        .wait(3000);
});
 
test
('hover button', async t =>{
    const checkBox =Selector('#tried-test-cafe');

    await t.hover(checkBox)
    .wait(3000);
});