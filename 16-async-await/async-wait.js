const getData = async () => {
  const data = await fetch('alguma url');
  const json = await data.json();

  return json;
}