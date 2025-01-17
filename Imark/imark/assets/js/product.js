// Get elements
const modal = document.getElementById("product-modal");
const addProductBtn = document.querySelector(".add-product");
const closeModal = document.querySelector(".close-modal");

// Show modal
addProductBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

// Close modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside the content
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
