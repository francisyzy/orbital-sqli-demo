# Sample Telegram bot to showcase SQL Injection

How to enable SQL Injection:

https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryrawunsafe

https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#%EF%B8%8F-string-concatenation

## SQL Injection resources

https://brightsec.com/blog/sql-injection-attack/

https://www.linode.com/docs/guides/sql-injection-attack/

https://owasp.org/www-community/attacks/SQL_Injection

## Sample injection

`sample' OR '5'='5`

`' AND role = 'ADMIN' UNION SELECT name from user WHERE phone_number='456`

`' AND role = 'ADMIN' UNION SELECT role from user WHERE phone_number='456`

