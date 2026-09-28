document.addEventListener("DOMContentLoaded", () => {

    const filters = document.querySelectorAll(".filter");
    const cards = document.querySelectorAll(".writeup-card");

    filters.forEach(filter => {

        filter.addEventListener("click", () => {

            // Ambil kategori dari tombol
            const selectedCategory = filter.dataset.filter;


            // Ubah tombol aktif
            filters.forEach(btn => {
                btn.classList.remove("active");
            });

            filter.classList.add("active");


            // Filter card
            cards.forEach(card => {

                const cardCategory =
                    card.dataset.category;

                if (
                    selectedCategory === "all" ||
                    cardCategory === selectedCategory
                ) {

                    card.style.display = "block";

                } else {

                    card.style.display = "none";

                }

            });

        });

    });

});