function SalarySlip (props) {
    let salary = props.salary
    let tax = 0
    if (salary >= 2000) {
        tax = salary * 21/100
    } else {
        tax = salary * 15/100
    }
    let net = salary - tax
    return (
        <>
            <h2> Salary slip of {props.name}</h2>
            Salary: {salary}<br/>
            Tax: {tax}<br/>
            Net: {net}
        </>
    )
}

export default SalarySlip;