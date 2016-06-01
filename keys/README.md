# Self-Signed key for testing

## Generation

```bash
openssl req -nodes \
  -newkey rsa:2048 -days 3650 -x509 \
  -keyout server.key \
  -out server.crt \
  -batch -subj "/commonName=localhost"
```
