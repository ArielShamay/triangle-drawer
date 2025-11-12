# Triangle Drawer 🎨

אפליקציית web אינטראקטיבית לציור משולשים על בסיס נקודות שנלחצות על canvas לבן.

## תיאור הפרויקט

**Triangle Drawer** הוא כלי פשוט ויעיל לציור משולשים באופן ויזואלי:
- כל לחיצה על ה-canvas מוסיפה נקודה חדשה
- אחרי כל 3 לחיצות, האפליקציה מציירת משולש אוטומטית המחבר את שלוש הנקודות האחרונות
- המשתמש יכול למחוק, לבטל פעולות ולייצא את הציור כקובץ PNG

## מבנה הפרויקט

```
triangle-drawer/
├── index.html           # דף HTML ראשי
├── styles.css           # עיצוב האפליקציה
├── src/
│   ├── board.js        # לוגיקת ניהול נקודות ואירועים
│   └── renderer.js     # פונקציות ציור על Canvas
├── tests/
│   └── board.test.js   # בדיקות יחידה
├── package.json        # הגדרות הפרויקט
├── .gitignore          # קבצים להתעלמות ב-Git
└── README.md           # מסמך זה
```

## תכונות עיקריות ✨

### תכונות בסיסיות (מיושמות)
- ✅ **ציור נקודות**: כל לחיצה מוסיפה נקודה אדומה עם מסגרת לבנה
- ✅ **ציור משולשים אוטומטי**: אחרי כל 3 נקודות, משולש כחול מצויר
- ✅ **ניקוי לוח**: כפתור למחיקת כל הנקודות והמשולשים
- ✅ **ביטול פעולה (Undo)**: חזרה לשלב הקודם (עד 50 פעולות)
- ✅ **ייצוא PNG**: שמירת הציור כקובץ תמונה
- ✅ **שמירה אוטומטית**: המצב נשמר ב-localStorage ומשוחזר בטעינה מחדש
- ✅ **מונים**: הצגת מספר הנקודות והמשולשים בזמן אמת
- ✅ **Responsive**: התאמה לגדלי מסך שונים (Desktop ו-Mobile)
- ✅ **DPR Support**: רזולוציה חדה במסכי Retina

### ארכיטקטורה
- **קוד מודולרי**: הפרדה בין לוגיקה (`board.js`) לרינדור (`renderer.js`)
- **ES6 Modules**: שימוש ב-import/export לניהול תלויות
- **State Management**: ניהול state פשוט עם מערך `points` והיסטוריה
- **Pure Functions**: פונקציות טהורות כמו `getLastThreePoints()` - קלות לבדיקה

## הוראות הרצה 🚀

### אופן 1: פתיחה ישירה בדפדפן

הדרך הפשוטה ביותר:

1. **פתח את הקובץ בדפדפן**:
   ```powershell
   # Windows PowerShell
   Start-Process "C:\Users\ariel\triangle-drawer\index.html"
   ```
   
   או פשוט:
   - לחץ פעמיים על `index.html` ב-File Explorer
   - גרור את הקובץ לחלון הדפדפן

2. **התחל לצייר!**
   - לחץ על ה-canvas להוספת נקודות
   - צפה במשולשים שנוצרים אחרי כל 3 נקודות

### אופן 2: שימוש ב-Live Server (מומלץ)

אם אתה משתמש ב-VS Code:

1. **התקן את תוסף Live Server**:
   - פתח VS Code
   - לחץ על Extensions (Ctrl+Shift+X)
   - חפש "Live Server" והתקן

2. **הפעל את השרת**:
   ```powershell
   code "C:\Users\ariel\triangle-drawer"
   ```
   
   בתוך VS Code:
   - לחץ ימני על `index.html`
   - בחר "Open with Live Server"
   - הדפדפן ייפתח אוטומטית ב-`http://127.0.0.1:5500`

3. **יתרונות**:
   - רענון אוטומטי בכל שינוי
   - תמיכה מלאה ב-ES Modules ללא בעיות CORS

### אופן 3: Python HTTP Server

אם יש לך Python מותקן:

```powershell
# נווט לתיקיית הפרויקט
cd "C:\Users\ariel\triangle-drawer"

# הפעל שרת פשוט (Python 3)
python -m http.server 8000

# פתח בדפדפן
Start-Process "http://localhost:8000"
```

### אופן 4: Node.js HTTP Server

אם אתה מעדיף Node.js:

```powershell
# התקן http-server גלובלית (פעם אחת)
npm install -g http-server

# הפעל את השרת
cd "C:\Users\ariel\triangle-drawer"
http-server -p 8080

# פתח בדפדפן
Start-Process "http://localhost:8080"
```

## הרצת בדיקות 🧪

הפרויקט כולל בדיקות יחידה לפונקציות הליבה:

```powershell
# מתיקיית הפרויקט
cd "C:\Users\ariel\triangle-drawer"

# הרץ בדיקות
node tests/board.test.js
```

**הבדיקות כוללות**:
- ✓ בדיקת `getLastThreePoints()` עם קלטים שונים (null, מערך ריק, פחות מ-3, בדיוק 3, יותר מ-3)
- ✓ אימות טיפוסי קואורדינטות
- ✓ לוגיקת חישוב מתי לצייר משולש (modulo 3)

## Git & GitHub - פקודות שימושיות 🔧

### אתחול Git מקומי

```powershell
# נווט לתיקייה
cd "C:\Users\ariel\triangle-drawer"

# אתחל Git repository
git init

# הוסף את כל הקבצים
git add .

# צור commit ראשון
git commit -m "Initial commit: Triangle Drawer scaffold with full functionality"

# בדוק סטטוס
git status
```

### יצירת Repository ב-GitHub

**⚠️ הערה חשובה**: לפני יצירת repository ב-GitHub, **בקש ממני אישור מפורש**.

אחרי קבלת אישור, ניתן להשתמש באחת מהשיטות הבאות:

#### שיטה 1: שימוש ב-GitHub CLI (מומלץ)

```powershell
# התקן GitHub CLI אם עדיין לא מותקן
# https://cli.github.com/

# התחבר ל-GitHub (פעם אחת)
gh auth login

# צור repository ודחוף אותו
gh repo create triangle-drawer --public --source=. --remote=origin --push

# או אם תרצה repository פרטי:
gh repo create triangle-drawer --private --source=. --remote=origin --push
```

#### שיטה 2: דרך ממשק GitHub (ידני)

1. **צור repository ב-GitHub.com**:
   - לך ל-https://github.com/new
   - שם: `triangle-drawer`
   - תיאור: "Interactive web app for drawing triangles on canvas"
   - בחר Public/Private
   - **אל תוסף** README, .gitignore, או License (כבר קיימים)

2. **חבר ודחוף**:
   ```powershell
   # הוסף remote (החלף USERNAME בשם המשתמש שלך)
   git remote add origin https://github.com/USERNAME/triangle-drawer.git
   
   # שנה שם ל-main (אם צריך)
   git branch -M main
   
   # דחוף לראשונה
   git push -u origin main
   ```

### פקודות Git יומיומיות

```powershell
# בדוק שינויים
git status

# הוסף שינויים ספציפיים
git add src/board.js

# או הוסף הכל
git add .

# צור commit עם הודעה
git commit -m "Add undo functionality"

# דחוף ל-GitHub
git push

# משוך שינויים אחרונים
git pull

# צפה בהיסטוריית commits
git log --oneline

# חזור ל-commit קודם (בזהירות!)
git revert HEAD

# צור branch חדש לפיצ'ר
git checkout -b feature/new-feature

# חזור ל-main
git checkout main
```

## שימוש באפליקציה 📝

1. **הוסף נקודות**: לחץ על ה-canvas במיקומים רצויים
2. **צפה במשולשים**: אחרי כל 3 נקודות, משולש ייווצר אוטומטית
3. **נקה הכל**: לחץ על "נקה הכל" למחיקת כל התוכן
4. **בטל פעולה**: לחץ על "בטל פעולה" לחזור צעד אחורה
5. **ייצא תמונה**: לחץ על "ייצא PNG" לשמירת הציור כתמונה

## שיפורים מומלצים 🚀

### חובה (Priority: High)
- [ ] **בדיקות אינטגרציה**: הוסף בדיקות E2E עם Playwright או Cypress
- [ ] **Error Handling**: טיפול טוב יותר בשגיאות (canvas לא נתמך, localStorage מלא)
- [ ] **Accessibility**: תמיכה במקלדת (Tab, Enter, Arrow keys) ו-ARIA labels

### מומלץ (Priority: Medium)
- [ ] **Redo**: הוספת פונקציונליות Redo בנוסף ל-Undo
- [ ] **בחירת צבעים**: אפשרות לבחור צבע לנקודות ולמשולשים
- [ ] **גודל נקודה**: slider לשינוי גודל הנקודות
- [ ] **רשת (Grid)**: אופציה להצגת רשת רקע
- [ ] **Snap to Grid**: הצמדת נקודות לרשת
- [ ] **מצב Preview**: הצגת קווים זמניים בין נקודות לפני ציור המשולש
- [ ] **ניקוי חלקי**: מחיקת משולש ספציפי או נקודה בודדת
- [ ] **Touch Events**: שיפור תמיכה במובייל (pinch to zoom)

### אופציונלי (Priority: Low)
- [ ] **SVG Renderer**: אפשרות מודולרית לבחור בין Canvas ל-SVG
- [ ] **Export JSON**: ייצוא/ייבוא של הנקודות כקובץ JSON
- [ ] **Animation**: אנימציות בציור המשולשים
- [ ] **Multiple Shapes**: תמיכה בצורות נוספות (ריבועים, מעגלים)
- [ ] **Layers**: שכבות מרובות לציורים מורכבים
- [ ] **Collaborative Mode**: עריכה משותפת בזמן אמת (WebRTC/WebSocket)
- [ ] **History Timeline**: timeline ויזואלי של השינויים
- [ ] **Themes**: ערכות נושא (כהה/בהיר/צבעוני)

## טכנולוגיות 🛠️

- **HTML5 Canvas API**: לציור גרפי
- **JavaScript ES6+**: Modules, Arrow Functions, Destructuring
- **CSS3**: Flexbox, Transitions
- **LocalStorage API**: שמירת מצב
- **Vanilla JS**: ללא תלויות חיצוניות

## דפוסי קוד מומלצים 💡

### פונקציות עיקריות

```javascript
// board.js - לוגיקה
handleClick(event)          // מטפל באירוע לחיצה
addPoint(x, y)              // מוסיף נקודה למערך
getLastThreePoints(points)  // מחזיר 3 נקודות אחרונות
clearBoard()                // מנקה הכל
undo()                      // מבטל פעולה אחרונה
saveToHistory()             // שומר state להיסטוריה
redrawAll()                 // מצייר מחדש הכל

// renderer.js - ציור
initCanvas(canvas)          // מאתחל canvas וגודל
drawPoint(canvas, point)    // מצייר נקודה בודדת
drawTriangle(canvas, pts)   // מצייר משולש
clearCanvas(canvas)         // מנקה canvas
```

### State Management פשוט

```javascript
// State מרכזי
let points = [];           // כל הנקודות
let history = [];          // היסטוריה ל-undo

// עדכון state
points.push(newPoint);
saveToHistory();
saveState();              // localStorage

// שחזור state
loadState();              // מ-localStorage
redrawAll();
```

## תמיכה ודיבאג 🐛

### בעיות נפוצות

1. **Canvas לא מוצג**:
   - בדוק שהדפדפן תומך ב-Canvas
   - בדוק ב-DevTools Console לשגיאות

2. **ES Modules לא עובדים**:
   - הפעל דרך web server (לא file://)
   - בדוק שיש `type="module"` בתג script

3. **localStorage לא עובד**:
   - בדוק שהדפדפן לא במצב Incognito
   - בדוק שיש מקום פנוי ב-localStorage

### DevTools Tips

```javascript
// בקונסול הדפדפן:
localStorage.getItem('triangle-drawer-points')  // צפה ב-state שמור
localStorage.clear()                            // נקה state
```

## רישיון 📄

MIT License - חופשי לשימוש מסחרי ופרטי.

## תרומה 🤝

תרומות מתקבלות בברכה! נא:
1. Fork את הפרויקט
2. צור branch לפיצ'ר (`git checkout -b feature/AmazingFeature`)
3. Commit את השינויים (`git commit -m 'Add some AmazingFeature'`)
4. Push ל-branch (`git push origin feature/AmazingFeature`)
5. פתח Pull Request

---

**נוצר ב-2025** | Made with ❤️ using Vanilla JavaScript
