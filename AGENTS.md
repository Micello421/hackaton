# Hackaton — reguły dla agenta (Kandev)

Repo: `https://github.com/Micello421/hackaton`  
Lokalnie: `D:\DUPA\hackaton`  
Cel: zespół na hakatonie sprawdza wynik przez `git fetch` / `git pull`, bez dostępu do PC.

## Obowiązkowy workflow gita (KAŻDY większy task)

1. Na starcie: `git fetch origin` i pracuj na **nowym branchu** od `origin/main`.
   - Nazwa: `task/<krotki-opis>-<3-4-znaki>` (np. `task/login-mvp-a7k2`)
   - Nie commituj bezpośrednio na `main`.
2. Po sensownym etapie (działający kawałek / naprawiony bug / gotowa sekcja):
   - `git add` tylko potrzebne pliki
   - `git commit -m "..."` z jasnym opisem *dlaczego*
   - `git push -u origin HEAD`
3. Gdy task jest gotowy do review zespołu:
   - otwórz / zaktualizuj **Pull Request** do `main`
   - w odpowiedzi podaj **link PR**, nazwę brancha, jak uruchomić, wynik testów
4. Kolejne większe polecenie w tym samym tasku = **kolejny commit** (nie jeden gigantyczny na końcu).
   - Jeśli zmiana jest nowym tematem → nowy branch + nowy PR.

## Szablon odpowiedzi końcowej

```
PR: https://github.com/Micello421/hackaton/pull/N
Branch: task/...
Clone/check:
  git clone https://github.com/Micello421/hackaton.git
  cd hackaton
  git fetch
  git checkout <branch>
Run: <komendy>
Tests: ok/fail
READY TO ARCHIVE
```

## Dysk i bezpieczeństwo

- Pracuj na `D:` — nie zaśmiecaj `C:`.
- Nie commituj: `.env`, sekrety, `node_modules`, buildy, modele, duże binarki.
- Po testach posprzątaj lokalne cache/`node_modules` jeśli nie są w git.
- Auto-approve narzędzi: kontynuuj bez zbędnych pytań, gdy to bezpieczne.

## Role (wybór agenta w Kandev)

| Agent | Kiedy |
|-------|--------|
| **Claude Default** | główny builder MVP (preferowany) |
| **Codex GPT / 6 Luna** | szybkie poprawki, skrypty, backend |
| **Cursor Auto** | UI / refaktor w stylu Cursor |
| **Copilot** | drobne łatki, gdy inne zajęte |
| **Antigravity** | tylko po zalogowaniu Google (zamiennik Gemini) |
| **Gemini** | NIE używać — wyłączony przez Google |

Nie używaj równolegle wielu agentów na tym samym pliku bez uzgodnienia — kolizje merge.
