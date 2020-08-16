def test_root(client):
    rv = client.get('/')
    assert (rv.status_code == 200)
    assert (b'Hello!' in rv.data)