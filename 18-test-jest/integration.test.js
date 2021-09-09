it('should be create a book', async () => {
  const book = createFakeBook();

  const createBookResponse = await request(app).post('/book').send(book);

  expect(createBookResponse.status).toEqual(200);
});