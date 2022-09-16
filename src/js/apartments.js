const boxesHolder = document.querySelector(
    ".apartments .container .boxes-holder"
);

function formatCurrency(value) {
    return value
        .toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        })
        .slice(0, -3);
}

fetch("../json/apartments.json")
    .then((response) => response.json())
    .then((apartments) => {
        apartments.map((apt) => {
            let div = document.createElement("div");
            div.className = "box wow animate__animated animate__fadeInDown";
            boxesHolder.appendChild(div);

            let imageHolder = document.createElement("div");
            imageHolder.className = "image";
            div.appendChild(imageHolder);

            let image = document.createElement("img");
            image.src = apt.img;
            image.alt = `Apartment ${apartments.indexOf(apt) + 1}`;
            imageHolder.appendChild(image);

            let buyLink = document.createElement("a");
            buyLink.href = "#";
            buyLink.innerHTML = "buy now";
            imageHolder.appendChild(buyLink);

            let text = document.createElement("div");
            text.className = "text";
            div.appendChild(text);

            let aptName = document.createElement("h4");
            aptName.innerHTML = `
                ${apt.address.slice(0, apt.address.lastIndexOf(","))},
                <br />
                ${apt.address.slice(apt.address.lastIndexOf(", ") + 1)}
            `;
            text.appendChild(aptName);

            let details = document.createElement("div");
            details.className = "details";
            text.appendChild(details);

            let price = document.createElement("p");
            price.className = "price";
            price.innerHTML = formatCurrency(Number(apt.price));
            details.appendChild(price);

            let moreDetailsDiv = document.createElement("div");
            details.appendChild(moreDetailsDiv);

            function detailGen(classVal, iconVal, dataVal, dataWord) {
                let detail = document.createElement("p");
                detail.className = classVal;
                moreDetailsDiv.appendChild(detail);

                let icon = document.createElement("i");
                icon.className = iconVal;
                detail.appendChild(icon);

                let span = document.createElement("span");
                span.innerHTML = `${dataVal} ${dataWord}`;
                detail.appendChild(span);
            }

            detailGen("beds", "fa-solid fa-bed", apt.bed, "BR");
            detailGen("showers", "fa-solid fa-shower", apt.shower, "SH");
            detailGen("kitchens", "fa-solid fa-kitchen-set", apt.kitchen, "KT");
        });
    });
