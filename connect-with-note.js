while (true) {
    let connectButtons = Array.from(document.querySelectorAll('span')).filter(
        el => el.textContent.trim() === "Connect" && el.closest("li") !== null && el.closest("li") !== undefined);

    for (connectButton of connectButtons) {
        try {
            connectButton.scrollIntoView();
            userName = connectButton.closest("li").querySelector("span[dir='ltr'").querySelector("span").textContent.split(" ", 1)[0]
            if (userName.includes("-")) {
                userName = userName.split("-", 1)[0]
            }
            console.log(`Sending message to ${userName}`)
            email = userName.toLowerCase() + "@my-domain.com"
            connectButton.click();
            await new Promise(resolve => setTimeout(resolve, 1000));
            addNoteButton = document.querySelector("button[aria-label='Add a note']");
            addNoteButton.click();
            await new Promise(resolve => setTimeout(resolve, 1000));
            textAreaMessage = document.getElementById("custom-message");
            textAreaMessage.focus();
            message = `Salut ${userName},
    
Sunt programator si vreau sa iti propun creearea unei adrese de email de business.
Cum ar fi sa ai adresa de email ${email} sau office@my-domain.com ?

Astept raspunsul tau,

Mihai`
            document.execCommand('insertText', false, message);

            await new Promise(resolve => setTimeout(resolve, 1000));
            sendButton = document.querySelector("button[aria-label='Send invitation']");
            sendButton.click();
            await new Promise(resolve => setTimeout(resolve, 5000));
        } catch (error) {
            console.log(error)
        }
    }
    try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        document.querySelector("button[aria-label='Next']").click();
        await new Promise(resolve => setTimeout(resolve, 3000));
    } catch (error) {
        console.log(error)
    }
}
