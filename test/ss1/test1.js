fixture `test1`
    
test
    .page `https://devexpress.github.io/testcafe/blog/`
    ('test1', async t => {
        console.log("testCafe site");
    });

test
    .page `https://www.facebook.com/groups/genshinmarket/pending_posts/?search=&has_selection=false&is_notif_background=false`
    ('test1', async t => {
        console.log("Demo QA site");
    });