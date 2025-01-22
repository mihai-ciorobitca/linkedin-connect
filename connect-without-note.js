while (true) {
    let connectButtons = Array.from(document.querySelectorAll('span')).filter(
        el => el.textContent.trim() === "Connect" && el.closest("li") !== null && el.closest("li") !== undefined);

    for (connectButton of connectButtons) {
        try {
            connectButton.scrollIntoView();
            connectButton.click();
            await new Promise(resolve => setTimeout(resolve, 1000));
            addNoteButton = document.querySelector("button[aria-label='Send without a note']");
            addNoteButton.click();
        } catch (error) {
            window.scrollTo(0, document.body.scrollHeight);
        }
    }
    try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        document.querySelector("button[aria-label='Next']").click();
        await new Promise(resolve => setTimeout(resolve, 3000));
    } catch (error) {
        window.scrollTo(0, document.body.scrollHeight);
    }
}
