# Git Branch Creation Commands

## 1. Create a Normal New Branch (Copies All Files)

```bash
git checkout -b new_branch
```

---

## 2. Create an Empty Branch (No Files, No History)

```bash
git checkout --orphan new_branch
git rm -rf .
git commit --allow-empty -m "Initial empty commit"
```

---

## 3. Create a Branch From an Older Commit

```bash
git checkout -b new_branch <commit-id>
```

---

## 4. Create a Branch and Then Add New Changes

```bash
git checkout -b feature_branch
# now edit files and then commit
git add .
git commit -m "New changes"
```
