export async function getCourse() {
  const response = await fetch(`${process.env.API_URL}/course?populate=image`);
  const result = await response.json();
  return result;
}
