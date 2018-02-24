# reservations-component

[![CircleCI](https://circleci.com/gh/thesilverspoon/reservations-component.svg?style=svg)](https://circleci.com/gh/thesilverspoon/reservations-component)

## PostgreSQL Installation Instructions


```
$ brew install postgresql
```


```
$ initdb /usr/local/var/postgres
```


```
$ pg_ctl -D /usr/local/var/postgres start
```


```
$ pg_ctl -D /usr/local/var/postgres stop
```

```
$ createuser mark_pg

Shall the new role be a superuser? (y/n) n
Shall the new role be allowed to create databases? (y/n) n
Shall the new role be allowed to create more new roles? (y/n) n
```


```
$ createdb -Omark_pg -Eutf8 silverspoon
```


```
$ psql -U mark_pg silverspoon
```

psql prompt looks like this.
```
silverspoon->
```

Other commands
```
\q   // quit
\l   // list databases
\dt  // show tables
\dt <name>
select * from restaurants;
select * from reservations;
```