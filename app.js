// Create 15 blocks for each category
for (let i = 0; i < 15; i++) {
    createBlock(i, "workContainer");
    createBlock(i, "sleepContainer");
    createBlock(i, "bufferContainer");
}

function createBlock(id, containerId) {
    // Create a new block element
    const block = document.createElement('div');
    block.className = 'block';
    block.id = `${containerId}-${id}`;

    // Add an event listener to the block
    block.addEventListener('click', function () {
        // Toggle the block's completion status
        block.classList.toggle('complete');
        // Update counts
        updateCounts(containerId);
    });

    // Add the block to the blocks container
    const blocksContainer = document.getElementById(containerId);
    blocksContainer.appendChild(block);
}

function updateCounts(containerId) {
    const totalBlocks = document.getElementById(containerId).getElementsByClassName('block').length;
    const totalComplete = document.getElementById(containerId).getElementsByClassName('complete').length;
    const totalIncomplete = totalBlocks - totalComplete;

    // Update counts on the webpage
    document.getElementById('totalBlocks' + containerId.replace("Container", "")).innerText = totalBlocks;
    document.getElementById('completeBlocks' + containerId.replace("Container", "")).innerText = totalComplete;
    document.getElementById('incompleteBlocks' + containerId.replace("Container", "")).innerText = totalIncomplete;
}

// Initial count update
updateCounts('workContainer');
updateCounts('sleepContainer');
updateCounts('bufferContainer');
