# Student Task Manager
Opiskelijan tehtavalista, jolla voi lisata ja hallita opiskelutehtavia. Projekti on Ohjelmointi ja versionhallinta kurssin lopputyö.

## Kayttoohje
Avaa index.html selaimessa. Lisaa tehtava painikkeella tai Enter-nappaimella. Poista tehtava kaksoisnapsauttamalla.

## Käytetyt Git-komennot

- git clone - Repositorion kloonaaminen SSH-yhteydellä.
- git status - Projektin tilan tarkistaminen.
- git add - Muutosten lisääminen staging-alueelle.
- git commit - Muutosten tallentaminen versionhallintaan.
- git push - Muutosten lähettäminen GitHubiin.
- git pull - Muutosten hakeminen GitHubista.
- git branch - Haarojen tarkistaminen.
- git switch - Haaran luominen tai vaihtaminen.
- git merge - Haarojen yhdistäminen.
- git stash - Keskeneräisten muutosten väliaikainen tallentaminen.
- git stash pop - Keskeneräisten muutosten palauttaminen.
- git revert - Commitin muutosten kumoaminen.
- git reset --soft - Commitin peruminen säilyttäen muutokset staging-alueella.
- git reflog - HEAD-osoittimen historian tarkistaminen.
- git cherry-pick - Yksittäisen commitin siirtäminen toisesta haarasta.
- git rebase - Haaran päivittäminen main-haaran päälle.
- git check-ignore - Gitignore-sääntöjen testaaminen.
- git log - Commit-historian tarkistaminen.

## Ongelmat ja ratkaisut

- PowerShell-komento ei toiminut Bashissa. Käytin sen sijaan ls-komentoa.
- GitHub-yhteyttä varten loin SSH-avaimen ja lisäsin julkisen avaimen GitHubiin.
- Repositorion muuttunut osoite korjattiin git remote set-url -komennolla.
- Gitignore-tiedostosta puuttui yksi sääntö, jonka lisäsin ja testasin.
- Merge-konflikti syntyi, kun kahdessa haarassa muutettiin samaa HTML-otsikkoa. Konflikti ratkaistiin yhdistämällä otsikot.
- Tarkoituksella tehty virheellinen commit kumottiin git revert -komennolla.

## Pull Request

Dokumentointihaara yhdistettiin main-haaraan GitHubin Pull Request -toiminnolla. Ennen yhdistämistä haara päivitettiin rebase-komennolla ja Pull Requestiin lisättiin kommentti.

## Testaus

Sovellus testattiin selaimessa. Tehtävien lisääminen, Enter-näppäimen käyttäminen, tehtävien poistaminen ja tyhjän syötteen tarkistus toimivat.

Tehtävät eivät säily sivun päivittämisen jälkeen.
EOFcat >> README.md <<'EOF'

## Käytetyt Git-komennot

- git clone - Repositorion kloonaaminen SSH-yhteydellä.
- git status - Projektin tilan tarkistaminen.
- git add - Muutosten lisääminen staging-alueelle.
- git commit - Muutosten tallentaminen versionhallintaan.
- git push - Muutosten lähettäminen GitHubiin.
- git pull - Muutosten hakeminen GitHubista.
- git branch - Haarojen tarkistaminen.
- git switch - Haaran luominen tai vaihtaminen.
- git merge - Haarojen yhdistäminen.
- git stash - Keskeneräisten muutosten väliaikainen tallentaminen.
- git stash pop - Keskeneräisten muutosten palauttaminen.
- git revert - Commitin muutosten kumoaminen.
- git reset --soft - Commitin peruminen säilyttäen muutokset staging-alueella.
- git reflog - HEAD-osoittimen historian tarkistaminen.
- git cherry-pick - Yksittäisen commitin siirtäminen toisesta haarasta.
- git rebase - Haaran päivittäminen main-haaran päälle.
- git check-ignore - Gitignore-sääntöjen testaaminen.
- git log - Commit-historian tarkistaminen.

## Ongelmat ja ratkaisut

- PowerShell-komento ei toiminut Bashissa. Käytin sen sijaan ls-komentoa.
- GitHub-yhteyttä varten loin SSH-avaimen ja lisäsin julkisen avaimen GitHubiin.
- Repositorion muuttunut osoite korjattiin git remote set-url -komennolla.
- Gitignore-tiedostosta puuttui yksi sääntö, jonka lisäsin ja testasin.
- Merge-konflikti syntyi, kun kahdessa haarassa muutettiin samaa HTML-otsikkoa. Konflikti ratkaistiin yhdistämällä otsikot.
- Tarkoituksella tehty virheellinen commit kumottiin git revert -komennolla.

## Pull Request

Dokumentointihaara yhdistettiin main-haaraan GitHubin Pull Request -toiminnolla. Ennen yhdistämistä haara päivitettiin rebase-komennolla ja Pull Requestiin lisättiin kommentti.

## Testaus

Sovellus testattiin selaimessa. Tehtävien lisääminen, Enter-näppäimen käyttäminen, tehtävien poistaminen ja tyhjän syötteen tarkistus toimivat.

Tehtävät eivät säily sivun päivittämisen jälkeen.
## Mitä opin?
Kyllä oppisin tosi paljon Gitistä ja Brancheista todella paljon! Tämä on ollut tähän menne koulun kivoin asia tehdä ja olen iloinen jopa tästä työstä mitä tunnetta en ole ennen kokenut kouluasioista ja en hirveen usein tunne muutenkaan. Kiitos paljon!