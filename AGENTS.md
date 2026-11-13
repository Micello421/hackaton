# Hackaton — agenci + dysk (mało miejsca na C:)

Dane Kandev i temp są na **D:** (`D:\kandev-home`, `D:\temp-kandev`). Repo: `D:\DUPA\hackaton`.

## Agenci dostępni na tym PC
- Claude Code (`claude`)
- Codex (`codex`)
- Gemini CLI (`gemini`)
- Cursor Agent (`agent`)
- Antigravity (zainstalowany lokalnie)

W Kandev: Settings → Agents → dla każdego profilu włącz **Auto-approve all permissions**.

## Executor
Preferuj **Local** (praca w `D:\DUPA\hackaton`) albo Worktree na D:.  
Unikaj kopiowania ciężkich rzeczy na C:.

## Obowiązkowy koniec każdego taska
1. Commit + push brancha + PR na `https://github.com/Micello421/hackaton`
2. W odpowiedzi: link PR, branch, jak uruchomić, wynik testów
3. **Nie zostawiaj śmieci lokalnie**: usuń `node_modules`, buildy, cache w worktree jeśli powstały tylko do testu
4. Po udanym pushu użytkownik **Archive** taska w Kandev → czyści worktree

## Zakazane
- Duże pliki / modele / datasetty na dysku
- Commit `.env`, sekretów, `node_modules`
- Zostawianie worktree po skończonej pracy (archive po push)

## Szablon odpowiedzi końcowej
```
PR: <url>
Branch: <name>
Run: <commands>
Tests: <ok/fail>
Cleanup: pushed; ready to archive
```
