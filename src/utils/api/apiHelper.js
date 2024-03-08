export default async function apiHelper(url, method, body, protectedRoute=false) {
    let headers = {'Content-Type': 'application/json'}

    if( protectedRoute ){
        headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`
    }
    let response = await fetch(url, {
        method: method,
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(body)
    })
    if (response.ok) {
        return response.json()
    } else {
        throw new Error(response.error)
    }
}