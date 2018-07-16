export function getCar(id) {
  return fetch(`/api/cars/${id}`).then(res => {
    if (!res.ok) {
      throw new Error(`${res.status} - ${res.statusText}`);
    }

    return res.json();
  }).then(({ car }) => car)
}

export function getComments(id) {
  return fetch(`/api/cars/${id}/comments`).then(res => {
    if (!res.ok) {
      throw new Error(`${res.status} - ${res.statusText}`);
    }

    return res.json();
  }).then(comments => comments)
}
