# Hackaton

Kod powstaje na PC w domu (Kandev + telefon). Zespół sprawdza wynik z GitHuba.

## Linki

- **Repo:** https://github.com/Micello421/hackaton  
- **PR-y:** https://github.com/Micello421/hackaton/pulls  
- **Branches:** https://github.com/Micello421/hackaton/branches  
- **Kandev (telefon, Tailscale ON):** https://desktop-ocvn3n1.tail714de0.ts.net/

## Jak zespół sprawdza wynik

```bash
git clone https://github.com/Micello421/hackaton.git
cd hackaton
git fetch --all
git branch -r
git checkout <branch-z-taska>
```

Albo wejdź w link **PR** z taska i przeglądaj diff na GitHubie.

Po merge do `main`:

```bash
git checkout main
git pull
```

## Jak powstają branche

Każdy większy task w Kandev → branch `task/<opis>-<suffix>` → commity po etapach → PR do `main`.

## Sterowanie z telefonu

1. Tailscale Connected  
2. Otwórz Kandev (link wyżej)  
3. New Task → repo **hackaton** (nie SPRAWKA)  
4. Agent: **Claude Default**  
5. Wklej prompt z `PROMPT_SZABLON.txt` / `@` prompt HAKATON  
6. Po skończeniu skopiuj link PR do czatu zespołu
