// Napisz program, który: wczyta z wej ́scia jedn  ̨a liczb  ̨e całkowit  ̨a, wyznaczy jej dwukrotno ́s ́c i wypisze wynikna wyj ́scie.
const getDouble = (i) => {
    return i * 2
}
// Napisz program, który wczyta dwie liczby i wypisze odległo ́s ́c mi ̨edzy nimi na standardowe wyj ́scie.
const getDistance = (a, b) => {
    let result
    if (a > b) {
        result = a - b
    } else {
        result = b - a
    }
    return result
}

// Body  Mass  Index(BMI),  to  współczynnik  opisuj  ̨acy  prawidłow  ̨a  relacj  ̨e  pomi  ̨edzy  mas  ̨a  ciała  dorosłegoczłowieka a wzrostem.
// Napisz program, który: wczyta mas  ̨e i wzrost dorosłego człowieka, obliczy dla tych danych współczynnikBMI i wypisze go na wyj ́scie wraz ze stosown  ̨a diagnoz  ̨a.
const BMI = (m, h) => {
    let result = {
        bmi: false,
        diagnos: false,
        error: false,
    }
    if (h < 1 || h > 2.5) {
        console.log('nedopustimaya vysota');
        result.error = 'nieprawidłowa wysokość';
        return result
    }
    if (m < 30 || m > 400) {
        console.log('nedopustimyj ves');
        result.error = 'niedozwolona waga';
        return result;
    }
    const bmi = m / Math.pow(h, 2)
    const diagnos = {
        niedo: 'niedowaga',
        norm: 'waga w normie',
        nad: 'nadwaga',
        otylosc: 'otylosc'
    }
    if (bmi < 20) {
        result.diagnos = diagnos.niedo
    }
    if (bmi >= 20 & bmi <= 25) {
        result.diagnos = diagnos.norm
    }
    if (bmi > 25 & bmi <= 30) {
        result.diagnos = diagnos.nad
    }
    if (bmi > 30) {
        result.diagnos = diagnos.otylosc
    }
    result.bmi = bmi;
    result.diagnos = result.diagnos.toUpperCase()
    return result

}
const PIT = (dochod) => {
    let result
    const q = 85528

    if (dochod <= q) {
        result = dochod / 100 * 18 - 556.02
    } else {
        result = (dochod - q) / 100 * 32 + 14839
    }
    console.log('resul t ', result)
    if (result < 0) result = 0
    return Math.round(result)
}
document.addEventListener("DOMContentLoaded", () => {
    getDistanceBtn = document.getElementById('getDistanceBtn');
    getDoubleBtn = document.getElementById('getDoubleBtn');
    getBMIBtn = document.getElementById('getBMIBtn');

    getDistanceBtn.addEventListener("click", () => {
        let A = Number(document.getElementById("distanceA").value);
        let B = Number(document.getElementById("distanceB").value);

        if (!isNaN(A) || !isNaN(B)) {
            document.getElementById('distanceResult').innerHTML = getDistance(A, B)
        }
    });
    getDoubleBtn.addEventListener("click", () => {
        let a = Number(document.getElementById('doubleNumer').value)
        if (!isNaN(a)) {
            document.getElementById('doubleResult').innerHTML = getDouble(a)

        }
    })
    let wagaInput = document.getElementById('waga');
    let wzrostInput = document.getElementById('wzrost');
    let resultSpan = document.getElementById('BMIResult');
    let diagnosSpan = document.getElementById('BMIDiagnos');
    let errorSpan = document.getElementById('BMIerror');
    const clear = () => {
        resultSpan.innerHTML = ''
        diagnosSpan.innerHTML = ''
        errorSpan.innerHTML = ''
    }
    getBMIBtn.addEventListener("click", () => {
        let waga = Number(wagaInput.value)
        let wzrost = Number(wzrostInput.value)
        if (!isNaN(waga) || !isNaN(wzrost)) {
            let resultBMI = BMI(waga, wzrost)
            console.log(resultBMI)

            if (resultBMI.error == false) {
                resultSpan.innerHTML = resultBMI.bmi
                diagnosSpan.innerHTML = resultBMI.diagnos
            } else {
                errorSpan.innerHTML = '*' + resultBMI.error
            }

        }
    })
    wagaInput.addEventListener('click', () => {
        clear()
    }
    )
    wzrostInput.addEventListener('click', () => {
        clear()
    }
    )
    let getPitBtn = document.getElementById('getPitBtn')
    let dochod = document.getElementById('dochodInput')
    let PitResult = document.getElementById('PitResult')
    getPitBtn.addEventListener('click',()=>{
        console.log(PitResult)
        console.log(dochod)
        console.log(document.getElementById('dochodInput')
        )
        PitResult.innerHTML = PIT(Number( dochod.value))
    })
});




