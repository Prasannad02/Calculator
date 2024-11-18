let expression = "";

function appendToExpression(value) {
    expression += value;
    document.getElementById("display").value = expression;
}

function clearDisplay() {
    expression = "";
    document.getElementById("display").value = "";
}

async function calculate() {
    try {
        const response = await fetch('/calculate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ expression }),
        });

        const data = await response.json();
        if (response.ok) {
            document.getElementById("display").value = data.result;
            expression = data.result.toString();
        } else {
            document.getElementById("display").value = data.error;
        }
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
