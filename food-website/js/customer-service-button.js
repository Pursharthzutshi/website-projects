const customerServiceButton = document.querySelector(".customer-service-button");


customerServiceButton.addEventListener("click", showCustomerServiceBox, true);

function showCustomerServiceBox() {

    customerServiceButton.style.pointerEvents = 'none';

    const customerServiceBox = document.createElement("div");
    customerServiceBox.classList.add("customer-service-box");

    const deleteCustomerServiceBoxIcon = document.createElement("button");
    deleteCustomerServiceBoxIcon.innerHTML = '<ion-icon name="close-circle"></ion-icon>';
    deleteCustomerServiceBoxIcon.classList.add("delete-customer-service-box-icon");

    const customerServiceHeading = document.createElement("h3");
    customerServiceHeading.classList.add("customer-service-heading");
    customerServiceHeading.innerHTML = 'Chat With Our Employee';

    const customerServiceInput = document.createElement("input");
    customerServiceInput.classList.add("customer-service-input");
    customerServiceInput.placeholder = 'Chat with us';

    document.body.appendChild(customerServiceBox);

    customerServiceBox.appendChild(deleteCustomerServiceBoxIcon);

    customerServiceBox.appendChild(customerServiceHeading);

    customerServiceBox.appendChild(customerServiceInput);

    const customerServiceBigIcon = document.createElement('icon');
    customerServiceBigIcon.classList.add("customer-service-big-icon");
    customerServiceBigIcon.innerHTML = '<ion-icon name="person-outline"></ion-icon>';

    const customerServiceBoxText = document.createElement("p");
    customerServiceBoxText.classList.add("customer-service-box-text");
    customerServiceBoxText.innerText = 'We are always ready for your help';

    const showMessage = document.createElement("p");
    showMessage.classList.add('show-message');

    const sendMessageButton = document.createElement("button");
    sendMessageButton.classList.add('send-message-button');
    sendMessageButton.innerHTML = '<ion-icon name="send-outline"></ion-icon>';


    customerServiceBox.appendChild(showMessage);

    customerServiceBox.appendChild(sendMessageButton);

    customerServiceBox.appendChild(customerServiceBigIcon);

    customerServiceBox.appendChild(customerServiceBoxText);

    sendMessageButton.addEventListener("click", sendMessage);


    function sendMessage() {

        if (customerServiceInput.value == "") {

            customerServiceInput.style.border = '2px solid red';
            showMessage.innerHTML = 'Please fill up';

        } else if (customerServiceInput.value != "") {
            customerServiceBoxText.innerHTML = '';
            customerServiceBigIcon.innerHTML = '';
            showMessage.innerHTML = 'You : ' + customerServiceInput.value;
            customerServiceInput.value = '';


        } else {
            return;
        }
    }


    deleteCustomerServiceBoxIcon.addEventListener("click", deleteCustomerServiceBox, true);


    function deleteCustomerServiceBox() {

        const customerServiceButton = document.querySelector(".customer-service-button");

        document.body.removeChild(customerServiceBox);

        customerServiceButton.style.pointerEvents = 'auto';

    }

}