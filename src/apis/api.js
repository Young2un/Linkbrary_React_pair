export async function getUser() {
  const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/user");
  const body = await response.json();
  return body;
}

export async function getLink() {
  const response = await fetch("https://bootcamp-api.codeit.kr/api/users/1/links");
  const body = await response.json();
  return body;
}

export async function getShared() {
  const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/folder");
  const body = await response.json();
  return body;
}