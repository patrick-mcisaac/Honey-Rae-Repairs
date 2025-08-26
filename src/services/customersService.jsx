export const getCustomerDetails = () => {
    return fetch(`http://localhost:8088/customers?_expand=user`).then(res =>
        res.json()
    )
}

export const getCustomerById = id => {
    return fetch(`http://localhost:8088/customers?userId=${id}`).then(res =>
        res.json()
    )
}

export const updateCustomer = (id, data) => {
    return fetch(`http://localhost:8088/customers/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
}
