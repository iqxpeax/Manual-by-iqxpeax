// ════════════════════════════════════════════════════════════════════════════
//  HELPERS
// ════════════════════════════════════════════════════════════════════════════
function localImg(file, caption = '') {
  const cap = caption ? `<p class="img-caption">↑ ${caption}</p>` : '';
  return `<img class="content-img" src="${IMG[file.replace(".png","")]}" alt="${caption}" loading="lazy">${cap}`;
}

function codeBlock(text) {
  return `<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Копировать</button><pre>${text}</pre></div>`;
}

function copyCode(btn) {
  const text = btn.nextElementSibling.textContent;
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = '✓ Скопировано';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = 'Копировать';
      btn.classList.remove('copied');
    }, 2000);
  });
}

// ════════════════════════════════════════════════════════════════════════════
//  PAGES
// ════════════════════════════════════════════════════════════════════════════
const pages = [

  // ── 00  Ознакомление ──────────────────────────────────────────────────────
  {
    title: "Ознакомление",
    tag: "Введение",
    intro: "Желательно проводить проверку по тому, как расставлены программы. Если нашли ошибки или хотите что-то добавить — пишите автору <strong>iqxpeax</strong>. Данный веб-сайт был сделан чтобы вы могли научиться проверять на читы в игре Minecraft. Предупреждение! Данный мануал может быть неправильным для некоторых серверов",
    callout: { label: "📌 Важно", text: "Большинство программ скачиваются на официальной платформе HolyCheck." },
    calloutLink: { href: "https://mods.holyworld.me/download", label: "Перейти на HolyWorld ↗" },
    content: `
      <p>Полный список ссылок для скачивания всех программ из мануала:</p>
      <ul class="link-list">
        <li><span>Everything 1.5</span><a href="https://www.voidtools.com/Everything-1.5.0.1391a.x86.zip" target="_blank" rel="noopener">Скачать ↗</a></li>
        <li><span>BamParser</span><a href="https://github.com/spokwn/BAM-parser/releases/download/v1.2.9/BAMParser.exe" target="_blank" rel="noopener">Скачать ↗</a></li>
        <li><span>InjGen</span><a href="https://github.com/NotRequiem/InjGen" target="_blank" rel="noopener">GitHub ↗</a></li>
        <li><span>RegScanner</span><a href="https://www.nirsoft.net/utils/regscanner.html" target="_blank" rel="noopener">Скачать ↗</a></li>
        <li><span>BrowserDownloadView</span><a href="https://www.nirsoft.net/utils/web_browser_downloads_view.html" target="_blank" rel="noopener">Скачать ↗</a></li>
        <li><span>Ocean (игроку)</span><a href="https://anticheat.ac/downloads/general/cli" target="_blank" rel="noopener">Скачать ↗</a></li>
        <li><span>ShellBag Analyzer</span><a href="https://privazer.com/ru/shellbag_analyzer_cleaner.exe" target="_blank" rel="noopener">Скачать ↗</a></li>
        <li><span>RecentFileView</span><a href="https://www.nirsoft.net/utils/recentfilesview.zip" target="_blank" rel="noopener">Скачать ↗</a></li>
        <li><span>ExecutedProgramsList</span><a href="https://www.nirsoft.net/utils/executedprogramslist.zip" target="_blank" rel="noopener">Скачать ↗</a></li>
        <li><span>UsbDriveLog</span><a href="https://www.nirsoft.net/utils/usbdrivelog.zip" target="_blank" rel="noopener">Скачать ↗</a></li>
        <li><span>UsbDeview</span><a href="https://www.nirsoft.net/utils/usb_devices_view.html" target="_blank" rel="noopener">Скачать ↗</a></li>
        <li><span>Recaf</span><a href="https://sourceforge.net/projects/recaf.mirror/files/latest/download" target="_blank" rel="noopener">Скачать ↗</a></li>
        <li><span>Journal Trace</span><a href="https://mods.holyworld.me/download" target="_blank" rel="noopener">Через HolyCheck ↗</a></li>
        <li><span>Simple Unlocker</span><a href="https://simpleunlocker.ds1nc.ru/release/simpleunlocker_release.zip" target="_blank" rel="noopener">Скачать ↗</a></li>
        <li><span>System Informer</span><a href="https://systeminformer.com/downloads.php" target="_blank" rel="noopener">Скачать ↗</a></li>
      </ul>
      <p>Проверить подозрительные моды: <a href="https://mods.holyworld.me/mods-review" target="_blank" rel="noopener">mods.holyworld.me/mods-review ↗</a></p>
    `,
    steps: [
      "Скачайте все программы из списка выше перед началом проверки.",
      "Изучите каждый раздел мануала в порядке бокового меню.",
      "При нахождении ошибок — сообщайте автору <strong>iqxpeax Discord - iqxpix</strong>.",
    ],
  },

  // ── 01  Проверка Игры ────────────────────────────────────────────────────
  {
    title: "Проверка Игры",
    tag: "Майнкрафт",
    intro: "Рассмотрим как находить читы внутри Майнкрафта и в папках игры.",
    callout: { label: "📌 Важно", text: "Название чит-клиента в заголовке, F3 или настройках = бан." },
    content: `
      <div class="section-title" style="margin-bottom:12px">Проверка внутри Майнкрафта</div>
      <ul class="plain-list">
        <li><strong>Шаг 1.</strong> Переходим в оконный режим (<code>F11</code>) — смотрим название в заголовке окна. Название чит-клиента = бан.</li>
      </ul>
      ${localImg('image36.png', 'Пример заголовка окна Майнкрафта')}
      <ul class="plain-list">
        <li><strong>Шаг 2.</strong> Жмём <code>F3</code> — смотрим версию внутри игры. Название чит-клиента = бан.</li>
      </ul>
      ${localImg('image112.png', 'F3 — информация о версии в игре')}
      ${localImg('image105.png', 'Пример F3 с чит-клиентом')}
      <ul class="plain-list">
        <li><strong>Шаг 3.</strong> <code>ESC → Настройки → Управление</code> — смотрим названия модов. Запрещённые = бан.</li>
      </ul>
      ${localImg('image22.png', 'Вкладка управления — поиск запрещённых модов')}
      <ul class="plain-list">
        <li><strong>Шаг 4.</strong> Вкладка <strong>Наборы ресурсов</strong> — проверяем на xray и запрещённые паки.</li>
      </ul>
      ${localImg('image3.png', 'Наборы ресурсов')}

      <div class="section-title" style="margin-top:28px;margin-bottom:12px">Показ скрытых файлов</div>
      <ul class="plain-list">
        <li><strong>Windows 10:</strong> Вид → Параметры → Изменить параметры папок → Вид → нужные галочки.</li>
        <li><strong>Windows 11:</strong> 3 точки → Параметры.</li>
      </ul>
      ${localImg('image111.png', 'Настройки отображения скрытых файлов Windows 10')}
      ${localImg('image81.png', 'Настройки отображения скрытых файлов Windows 11')}

      <div class="section-title" style="margin-top:28px;margin-bottom:12px">Папка .minecraft</div>
      <ul class="plain-list">
        <li><strong>config</strong> — конфиги запрещённых модов/читов. Дата &lt;14 дней = бан.</li>
        <li><strong>versions</strong> — название чита + дата &lt;14 дней = бан. Сравниваем вес с таблицей ниже.</li>
        <li><strong>mods / labymod / labymod-neo</strong> — скидываем на HolyCheck.</li>
        <li><strong>libraries → com → github</strong> — папка impact/impact development, дата &lt;14 дней = бан.</li>
        <li><strong>libraries → net → minecraftxray</strong> — дата &lt;14 дней = бан.</li>
      </ul>
      ${localImg('image41.png', 'Структура папки .minecraft')}
      ${localImg('image95.png', 'Папка versions — проверка названий')}
      ${localImg('image32.png', 'Папка config — поиск конфигов читов')}

      <table class="ref-table">
        <thead><tr><th>Версия</th><th>Правильный вес</th></tr></thead>
        <tbody>
          <tr><td>1.16 – 1.16.1</td><td>17 083 КБ</td></tr>
          <tr><td>1.16.2 – 1.16.3</td><td>17 096 КБ</td></tr>
          <tr><td>1.16.4 – 1.16.5</td><td>17 136 КБ</td></tr>
          <tr><td>1.17</td><td>19 079 КБ</td></tr>
          <tr><td>1.17.1</td><td>19 089 КБ</td></tr>
          <tr><td>1.18</td><td>19 569 КБ</td></tr>
          <tr><td>1.18.1</td><td>19 573 КБ</td></tr>
          <tr><td>1.18.2</td><td>19 785 КБ</td></tr>
          <tr><td>1.19</td><td>20 960 КБ</td></tr>
          <tr><td>1.19.1</td><td>21 137 КБ</td></tr>
          <tr><td>1.19.2</td><td>21 138 КБ</td></tr>
          <tr><td>1.19.3</td><td>22 173 КБ</td></tr>
          <tr><td>1.19.4</td><td>22 927 КБ</td></tr>
          <tr><td>1.20</td><td>22 489 КБ</td></tr>
          <tr><td>1.20.1</td><td>22 490 КБ</td></tr>
          <tr><td>1.20.2</td><td>22 643 КБ</td></tr>
          <tr><td>1.21</td><td>26 208 КБ</td></tr>
          <tr><td>1.21.4</td><td>27 672 КБ</td></tr>
          <tr><td>LabyMod 1.16.5</td><td>До 30 000 КБ</td></tr>
        </tbody>
      </table>

      ${localImg('image54.png', 'Папка libraries — com/github/impact')}
      ${localImg('image110.png', 'Lunar Client — папка .lunarclient')}

      <p><strong>Диски C, D и другие:</strong> папки с запрещёнными именами &lt;14 дней = бан. &gt;14 дней — открываем, есть .jar/.exe = бан.</p>
      ${localImg('image58.png', 'Проверка дисков')}
      <p><strong>Корзина:</strong> запрещённые .exe/.jar = бан. Дата корзины после начала проверки = бан.</p>
      ${localImg('image51.png', 'Проверка корзины')}
      <p><strong>Загрузки / Рабочий стол / Документы:</strong> подозрительные .exe/.jar открываем. Открылся чит = бан.</p>
      ${localImg('image70.png', 'Папка загрузок')}
      ${localImg('image113.png', 'Telegram Desktop в загрузках')}
    `,
    steps: [
      "F11 → оконный режим → заголовок окна.",
      "F3 → версия внутри игры.",
      "ESC → Настройки → Управление → запрещённые имена.",
      "Наборы ресурсов → xray-паки.",
      "Папки .minecraft: config, versions, mods, libraries.",
      "Диски, корзина, загрузки, рабочий стол, документы.",
    ],
  },

  // ── 02  Everything 1.5 ───────────────────────────────────────────────────
  {
    title: "Everything 1.5",
    tag: "Поиск файлов",
    intro: "Программа для мгновенного поиска файлов. Обязательно использовать alpha версию 1.5.",
    callout: { label: "⬇️ Скачать", text: "voidtools.com — Everything 1.5" },
    calloutLink: { href: "https://www.voidtools.com/Everything-1.5.0.1391a.x86.zip", label: "Скачать Everything 1.5 ↗" },
    content: `
      <p>Перед использованием проверить настройки:</p>
      <ul class="plain-list">
        <li><code>Ctrl+P → Exclude → Enable exclude list</code> — убрать галочку если есть.</li>
        <li>Вкладка <strong>NTFS</strong> — включить все галочки для каждого диска.</li>
        <li>Вкладка <strong>FAT</strong> — аналогичные настройки для флешек.</li>
      </ul>
      ${localImg('image1.png', 'Настройки Everything — Exclude')}
      ${localImg('image39.png', 'Настройки NTFS')}
      ${localImg('image115.png', 'Настройки FAT')}

      <div class="section-title" style="margin-top:24px;margin-bottom:10px">Список 1 — Поиск читов по названию (.exe, .jar)</div>
      ${codeBlock(`ext:.exe;.jar regex:(?i)(shellbag|impact|wurst|bleach[-_]?hack|aristois|huzuni|skill[-_]?client|nodus|inertia|ares|sigma|meteor|atomic|zamorozka|liquid[-_]?bounce|nurik|nursultan|celestial|calestial|celka|expensive|neverhook|excellent|wexside|wild|minced|deadcode|akrien|jigsaw|future|jessica|dreampool|vape|infinity|squad|no[-_]?rules|konas|zeus[-_]?client|rich[-_]?client|ghost[-_]?client|rusher[-_]?hack|thunder[-_]?hack|moon[-_]?hack|winner|nova|exire|doomsday|nightware|ricardo|extazyy|troxill|arbuz|dauntiblyat|rename[-_]?me[-_]?please|edit[-_]?me|takker|faker|xameleon|fuze[-_]?client|wise[-_]?folder|net[-_]?limiter|feather|delta|eclipse|venus|jex|hakari|hush|hach|rogalik|catlavan|haruka|wissend|fluger|sperma|vortex|newcode|astra|britva|bariton|bot|player|freecam|bedrock|hotbar|swap|chest|gumball|tweak|entity|viabackwards|viaforge|viaproxy|hitbox|elytra|xaero|through|mob|auto|place|health|inventory|x[-_]?ray|clean[-_]?cut|smart[-_]?moving|save[-_]?searcher|world[-_]?downloader|trade[-_]?finder|chorus[-_]?find|inv[-_]?move|chunk[-_]?copy|seed[-_]?cracker|diamond[-_]?sim|forge[-_]?hax|step[-_]?up|client[-_]?commands|camera[-_]?utils|cheat[-_]?utils|universal[-_]?mod|swing[-_]?through[-_]?grass|shift[\\s_-]?tap|aim[\\s_-]?assistance|trigger[\\s_-]?bot|collapse|melonity|blessed|creator1171|Spawner[\\s_-]?Locator)`)}
      ${localImg('image23.png', 'Пример результата поиска по названию')}

      <div class="section-title" style="margin-top:24px;margin-bottom:10px">Список 2 — Лоудеры и остатки от читов</div>
      ${codeBlock(`nursultan|baritone|"deltaloader"|"deltaclient"|"wexside"|xameleon|takker|"newlauncher"|troxill|nemezida|doomsday|thunderhack|wisefolder|"venusfr"|.faker|vec.dll|cleancut|wildclient|SwingThroughGrass|viabackwards|viaforge|viaproxy|vialoader|viamcp|"akrien"|"dreampool"|"norules"|"invmove"|"impactclient"|richclient|rusherhack|inventory_walk|evaware|aimbot|celestial|calestial|celka|expensive|neverhook|excellent|wurst|bleachhack|aristois|huzuni|skillclient|liquidbounce|nurik|minced|deadcode|konas|nightware|extazyy|troxil|antileak|arbuz|.akr|dauntiblyat|rename_me_please|fuzeclient|double_hotbar|smart_moving|savesearcher|topkautobuy|tweakeroo|librarian_trade_finder|entity_outliner|DiamondSim|ForgeHax|clientcommands|CutThrough|Control-Tweaks|fsutil.exe-|hideme.exe|catlavan|haruka|norules|zeusclient|ghost_client|rusherhack|moonhack|ricardo|extazyy|troxill|antileak|fuzeclient|wisefolder|netlimiter|USBOblivion.exe|hakari|hush|rogalik|vortexclient|caballeta|xray|aristoris|x-ray|entity_xray|invtweaks|zamorozka|vape|konas|".flauncher"|clean-main|exire|"rockstarclient"|Blast3x|Javalin|quickclient|meow|monoton|dimasik|weaver|weaverclient|PolyakDLC|DLC|ExosWare|Sk3dGuard|dickclient|divan|divanclient`)}
      ${localImg('image28.png', 'Пример результата поиска лоудеров')}

      <div class="section-title" style="margin-top:24px;margin-bottom:10px">Список 3 — Поиск конфигов и логов</div>
      ${codeBlock(`ext:.txt;.json;.toml;.yml;.cfg;.properties | folder: dm:last14days regex:(bariton|bot|player|freecam|bedrock|hotbar|swap|chest|gumball|tweak|entity|crystal|optimizer|viabackwards|viaforge|viaproxy|hitbox|elytra|xaero|through|mob|auto|place|health|inventory|x[-_]?ray|clean[-_]?cut|smart[-_]?moving|save[-_]?searcher|world[-_]?downloader|trade[-_]?finder|chorus[-_]?find|inv[-_]?move|chunk[-_]?copy|seed[-_]?cracker|diamond[-_]?sim|forge[-_]?hax|step[-_]?up|client[-_]?commands|camera[-_]?utils|cheat[-_]?utils|universal[-_]?mod|swing[-_]?through[-_]?grass)`)}

      <div class="section-title" style="margin-top:24px;margin-bottom:10px">Список 4 — vec.dll и mp3-читы</div>
      ${codeBlock(`size:30kb utf8content:net/minecraft/util/math/axisalignedbb | size:9400174`)}
      <p>Нашло 30kb файл = бан (vec.dll). Нашло по второму сайзу — открой cmd, перетащи файл и введи PID Майнкрафта. Тот же PID = бан.</p>

      <div class="section-title" style="margin-top:24px;margin-bottom:10px">Список 5 — Авалон и клинеры</div>
      ${codeBlock(`*.exe size:1566208 | size:22285824 | size:1010176 | size:22433280 | size:348672 | size:352256 | size:782848 | size:6887424 | size:763392 | size:6111 | size:743424 | size:1767424 | size:823808 | size:18126848 | <size:700kb..5mb utf8content:net/minecraftforge/fml/loading/FMLLoader | glowEsp> | <size:14mb..17mb utf8content:D3D11CreateDeviceAndSwapChain|LoadLibraryA>`)}
      ${localImg('image2.png', 'Поиск читов в .dll')}

      <div class="section-title" style="margin-top:24px;margin-bottom:10px">Список 6 — Doomsday</div>
      ${codeBlock(`*.jar size:21kb-10mb utf8content:net/java/s.class utf8content:net/java/f.class`)}
      <p>Нашло — запускаете (2 раза ЛКМ). Открылся думик = бан. Затем убираете <code>*.jar</code> и повторяете.</p>
      ${localImg('image109.png', 'Поиск читов в .jar')}

      <div class="section-title" style="margin-top:24px;margin-bottom:10px">Список 7 — Хитбоксы в .dll</div>
      ${codeBlock(`*.dll size:11767808 | size:486400 | size:15294464 | size:5641728 | size:2273792 | size:819987 | size:3823616 | size:1686528 | size:1560713`)}

      <div class="section-title" style="margin-top:24px;margin-bottom:10px">Список 8 — Читы в .exe</div>
      ${codeBlock(`*.exe size:547827 | size:1309696 | size:14202368 | size:782848 | size:53760 | size:13686784 | size:28107997 | size:22763666 | size:17731024 | size:72832762 | size:8520278 | size:63326352 | size:11421787 | size:11463432 | size:743936 | size:823808 | size:9388032 | size:191206617 | size:11897599 | size:11877071 | size:16197700 | size:16192613 | size:12173155 | size:16190579 | size:16674923 | size:15361912 | size:13734493 | size:12474796 | size:12104654 | size:19521024 | size:41382400 | size:4426752 | size:5253632 | size:52722370 | size:38520304 | size:27185152`)}
      ${localImg('image17.png', 'Поиск читов в .exe')}
      ${localImg('image73.png', 'Пример результатов поиска по размеру')}

      <div class="section-title" style="margin-top:24px;margin-bottom:10px">Необязательные полезные списки</div>
      ${codeBlock(`da:[currentDate] !.exe !.dll size:700kb..30mb file: content:"This program cannot be run in DOS mode."`)}
      <p>Показывает .exe/.dll переименованные в другие форматы — переименовываете в .exe, проверяете.</p>
      ${codeBlock(`size:5mb..55mb ext:exe`)}
      <p>Все exe весом 5–55 МБ. Странное имя → открываете → лоадер = бан.</p>
    `,
    steps: [
      "Проверить настройки Everything (исключения, NTFS, FAT).",
      "Вставить список 1 — поиск по названию читов.",
      "Вставить список 2 — лоудеры и остатки.",
      "Вставить список 3 — конфиги и логи (за 14 дней).",
      "Вставить список 4 — vec.dll и mp3-читы.",
      "Вставить списки 5–8 — авалон, doomsday, dll, exe.",
    ],
  },

  // ── 03  BamParser & InGen ────────────────────────────────────────────────
  {
    title: "BamParser & InGen",
    tag: "Анализ BAM",
    intro: "BamParser показывает запуск последних .exe через службу BAM. InjGen ищет jvmti-инжект в процессах javaw.",
    callout: { label: "⬇️ Ссылки", text: "BamParser и InjGen — GitHub." },
    content: `
      <ul class="link-list">
        <li><span>BamParser</span><a href="https://github.com/spokwn/BAM-parser/releases/download/v1.2.9/BAMParser.exe" target="_blank" rel="noopener">Скачать ↗</a></li>
        <li><span>InjGen</span><a href="https://github.com/NotRequiem/InjGen" target="_blank" rel="noopener">GitHub ↗</a></li>
      </ul>
      ${localImg('image25.png', 'Внешний вид BamParser')}
      <p><strong>BamParser:</strong> открываем у игрока, ждём загрузки. Нажимаем <strong>Not Signed Only</strong>, просматриваем все .exe:</p>
      <ul class="plain-list">
        <li>Название чита = бан.</li>
        <li>Файл переименован в .rar/.zip/.png = ищем, переименовываем в .exe, открылся лоадер = бан.</li>
        <li>Файл удалён (deleted) = ищем в Journal Trace удаление после проверки = бан.</li>
        <li>Можно найти в <strong>Browser Download View</strong> — скачан с сайта чита = бан.</li>
      </ul>
      ${localImg('image78.png', 'BamParser — фильтр Not Signed Only')}
      ${localImg('image47.png', 'Пример подозрительного .exe в BamParser')}
      <p><strong>InjGen</strong> — запускать в самом начале проверки (до Ocean). Находит: Vape Lite, Vape V4, DoomsDay, Slinky, Sunset, Karma, Cortex.</p>
    `,
    steps: [
      "Запустить InjGen в начале проверки (до Ocean).",
      "Открыть BamParser, дождаться загрузки всех процессов.",
      "Включить Not Signed Only — просмотреть все .exe.",
      "Подозрительные — проверить в Everything.",
      "Удалённые — искать в Journal Trace.",
    ],
  },

  // ── 04  BrowserDownload View ─────────────────────────────────────────────
  {
    title: "BrowserDownload View",
    tag: "История загрузок",
    intro: "Программа для проверки последних загрузок из браузера. Часто находит запрещённые моды удалённые пользователем.",
    callout: { label: "⬇️ Скачать", text: "NirSoft — BrowserDownloadsView" },
    calloutLink: { href: "https://www.nirsoft.net/utils/web_browser_downloads_view.html", label: "Перейти ↗" },
    content: `
      ${localImg('image94.png', 'Внешний вид BrowserDownloadsView')}
      <p>Сортируем по <strong>End time</strong>, смотрим за последние 14 дней:</p>
      <ul class="plain-list">
        <li>jar/exe скачан с чит-сайта = бан.</li>
        <li>С Discord/Telegram = проверяем файл.</li>
        <li>С официальных сайтов модов = смотрим название.</li>
        <li>Запрещённое имя файла — баним независимо от источника.</li>
      </ul>
    `,
    steps: [
      "Запустить BrowserDownloadsView.",
      "Сортировать по End time.",
      "Проверить загрузки за последние 14 дней.",
      "Подозрительные jar/exe — проверить через Everything и HolyCheck.",
    ],
  },

  // ── 05  LastActivityView ─────────────────────────────────────────────────
  {
    title: "LastActivityView",
    tag: "Активность",
    intro: "Хронологический журнал активности пользователя. Запускаем первым делом.",
    callout: { label: "📌 Важно", text: "Если перед проверкой запускались ShellBag, .bat-файлы, или программа «чистая» — баним." },
    content: `
      ${localImg('image104.png', 'Внешний вид LastActivityView')}
      <ul class="plain-list">
        <li><strong>Ctrl+F → javaw</strong> — ищем процесс запуска Майнкрафта.</li>
        <li>Листаем вверх, смотрим что делал игрок до проверки.</li>
        <li>Запускались ShellBag, .bat-файлы или программа полностью «чистая» = бан.</li>
      </ul>
      <p>Если не можете распознать что делал .bat — открываем блокнотом. Если там:</p>
      ${codeBlock(`powershell -Command "Start-Process cmd -ArgumentList '/c fsutil usn deletejournal /D /C:' -Verb RunAs"`)}
      <p>= бан (чистка Journal Trace).</p>
    `,
    steps: [
      "Запустить LastActivityView.",
      "Ctrl+F → javaw — найти запуск Майнкрафта.",
      "Просмотреть активность до начала проверки.",
      "Подозрительные .bat — открыть блокнотом, проверить содержимое.",
    ],
  },

  // ── 06  Ocean / CLI Ocean ────────────────────────────────────────────────
  {
    title: "Ocean / CLI Ocean",
    tag: "Античит",
    intro: "Ocean — основной инструмент глубокого анализа системы игрока от anticheat.ac.",
    callout: { label: "🔗 Ссылки", text: "Для модератора — anticheat.ac/dashboard. Для игрока — OceanCLI." },
    calloutLink: { href: "https://anticheat.ac/downloads/general/cli", label: "Скачать OceanCLI ↗" },
    content: `
      ${localImg('image87.png', 'Панель модератора — anticheat.ac/dashboard')}
      <p>Если у игрока не загружается сайт — скачать zapret или попробовать другой браузер.</p>
      <p><strong>Инструкция для игрока:</strong></p>
      <ul class="plain-list">
        <li>Создать папку на рабочем столе (Ocean / 123).</li>
        <li>Перекинуть туда <code>OceanCLI.exe</code>.</li>
        <li>Открыть CMD: <code>cd [путь к папке]</code> → Enter.</li>
        <li><code>OceanCLI.exe [Pin-code с сайта]</code> → Enter.</li>
        <li>Ждать 1–7 минут.</li>
      </ul>
      ${localImg('image11.png', 'Запуск OceanCLI в CMD')}
      ${localImg('image98.png', 'Процесс сканирования Ocean')}
      ${localImg('image116.png', 'Результаты Ocean — пример чистой проверки')}
      ${localImg('image40.png', 'Результаты Ocean — пример срабатывания')}
      <p><strong>Баним за:</strong></p>
      <ul class="plain-list">
        <li>Generic Jvmti injection (Type A)</li>
        <li>Generic Injection (Type A)</li>
        <li>Название чита (Cortex/Nursultan/Prestige — может быть ложным если удалён &gt;1 года)</li>
        <li>Generic Cheat (A)</li>
      </ul>
      ${localImg('image74.png', 'Пример результата с читом')}
      ${localImg('image26.png', 'Пример детекта инжекта')}
      ${localImg('image75.png', 'Детали срабатывания Ocean')}
    `,
    steps: [
      "Открыть anticheat.ac/dashboard (модератор).",
      "Скачать игроку OceanCLI.exe.",
      "Создать папку, запустить через CMD с Pin-кодом.",
      "Дождаться сканирования (1–7 минут).",
      "Проверить результат по критериям бана.",
    ],
  },

  // ── 07  Shellbag ─────────────────────────────────────────────────────────
  {
    title: "Shellbag",
    tag: "Проводник",
    intro: "ShellBag хранит историю папок в Проводнике — даже если папки уже удалены.",
    callout: { label: "⬇️ Скачать", text: "ShellBag Analyzer & Cleaner — Privazer" },
    calloutLink: { href: "https://privazer.com/ru/shellbag_analyzer_cleaner.exe", label: "Скачать ↗" },
    content: `
      ${localImg('image12.png', 'Внешний вид ShellBag Analyzer')}
      <p>Сортируем по дате модификации, смотрим запрещённые названия за последние 14 дней.</p>
      ${localImg('image89.png', 'Сортировка по дате в ShellBag')}
      ${localImg('image107.png', 'Пример подозрительной папки в ShellBag')}
      <p>Если файлов за последние 14 дней нет — <code>Win+R → cmd → systeminfo</code>, смотрим дату загрузки Windows. Если &gt;14 дней = бан (переустановка системы).</p>
      ${localImg('image108.png', 'Команда systeminfo в CMD')}
      ${localImg('image80.png', 'Результат systeminfo — дата установки Windows')}
    `,
    steps: [
      "Запустить ShellBag Analyzer.",
      "Сортировать по дате модификации.",
      "Искать запрещённые названия за последние 14 дней.",
      "Нет файлов за 14 дней → cmd → systeminfo → дата установки Windows.",
    ],
  },

  // ── 08  RecentFileView ───────────────────────────────────────────────────
  {
    title: "RecentFileView",
    tag: "Последние файлы",
    intro: "Показывает файлы которые недавно открывались на компьютере.",
    callout: { label: "⬇️ Скачать", text: "NirSoft — RecentFilesView" },
    calloutLink: { href: "https://www.nirsoft.net/utils/recentfilesview.zip", label: "Скачать ↗" },
    content: `
      ${localImg('image7.png', 'Внешний вид RecentFileView')}
      <ul class="plain-list">
        <li>Сортируем по <strong>execute time</strong>.</li>
        <li>Прокликиваем каждый .exe и .jar за последние 14 дней.</li>
        <li>Открылся лоадер или думик = бан.</li>
        <li>Удалённые .exe и .jar ищем в Journal Trace.</li>
      </ul>
    `,
    steps: [
      "Запустить RecentFileView.",
      "Сортировать по execute time.",
      "Прокликать каждый .exe и .jar за 14 дней.",
      "Удалённые файлы — Journal Trace.",
    ],
  },

  // ── 09  ExecutedProgramsList ─────────────────────────────────────────────
  {
    title: "ExecutedProgramsList",
    tag: "Запуски программ",
    intro: "Показывает все программы которые запускались на компьютере через Windows Prefetch.",
    callout: { label: "⬇️ Скачать", text: "NirSoft — ExecutedProgramsList" },
    calloutLink: { href: "https://www.nirsoft.net/utils/executedprogramslist.zip", label: "Скачать ↗" },
    content: `
      ${localImg('image61.png', 'Внешний вид ExecutedProgramsList')}
      <p>Запускаем, дважды кликаем по <strong>Last Executed On</strong> для сортировки по дате.</p>
      ${localImg('image85.png', 'Сортировка по дате запуска')}
      <ul class="plain-list">
        <li><strong>Ctrl+F</strong> — ищем читы по названиям.</li>
        <li>Поиск: <code>downloads</code>, <code>Рабочий стол</code>, <code>Desktop</code>.</li>
        <li>Проверяем <strong>Product Name</strong> и <strong>Company Name</strong> — если пустые у недавнего файла = ищем на ПК.</li>
      </ul>
    `,
    steps: [
      "Запустить ExecutedProgramsList.",
      "Двойной клик по Last Executed On — сортировка.",
      "Ctrl+F — поиск по названиям читов.",
      "Поиск по 'downloads', 'Desktop'.",
      "Проверить Product Name / Company Name.",
    ],
  },

  // ── 10  UsbDeview & System Informer ─────────────────────────────────────
  {
    title: "UsbDeview & System Informer",
    tag: "USB / Процессы",
    intro: "UsbDeview — история USB-устройств. System Informer Disk Devices — даты подключения и удаления.",
    callout: { label: "⬇️ Ссылки", text: "NirSoft UsbDeview и systeminformer.com" },
    content: `
      <ul class="link-list">
        <li><span>UsbDeview</span><a href="https://www.nirsoft.net/utils/usb_devices_view.html" target="_blank" rel="noopener">Скачать ↗</a></li>
        <li><span>UsbDriveLog</span><a href="https://www.nirsoft.net/utils/usbdrivelog.zip" target="_blank" rel="noopener">Скачать ↗</a></li>
        <li><span>System Informer</span><a href="https://systeminformer.com/downloads.php" target="_blank" rel="noopener">Скачать ↗</a></li>
      </ul>
      ${localImg('image67.png', 'UsbDeview — история подключений USB')}
      <p><strong>UsbDeview:</strong> сортируем по <strong>Registry Time 1</strong>. Дата после начала проверки = бан.</p>
      ${localImg('image114.png', 'System Informer — Disk Devices')}
      <p><strong>System Informer → Disk Devices:</strong> System → Options → Disk Devices → кликаем на флешку → Сведения → Дата последнего удаления. Время после начала проверки или за 1–2 минуты до = бан.</p>
    `,
    steps: [
      "Запустить UsbDeview, сортировать по Registry Time 1.",
      "Дата после начала проверки = бан.",
      "System Informer → System → Options → Disk Devices.",
      "Проверить дату последнего удаления для каждой флешки.",
    ],
  },

  // ── 11  Recaf & Holycheck ────────────────────────────────────────────────
  {
    title: "Recaf & Holycheck",
    tag: "Анализ .jar",
    intro: "HolyCheck упрощает проверку модов. Recaf + нейросеть — для глубокого анализа неизвестных файлов.",
    callout: { label: "⬇️ Ссылки", text: "Recaf и HolyWorld Mods Review" },
    content: `
      <ul class="link-list">
        <li><span>Recaf</span><a href="https://sourceforge.net/projects/recaf.mirror/files/latest/download" target="_blank" rel="noopener">Скачать ↗</a></li>
        <li><span>HolyCheck</span><a href="https://mods.holyworld.me/mods/check" target="_blank" rel="noopener">Открыть ↗</a></li>
        <li><span>Strings checker</span><a href="https://anticheat.ac/strings/" target="_blank" rel="noopener">Открыть ↗</a></li>
        <li><span>DeepSeek</span><a href="https://chat.deepseek.com/" target="_blank" rel="noopener">Открыть ↗</a></li>
      </ul>
      ${localImg('image77.png', 'HolyCheck — проверка модов')}
      <p><strong>Алгоритм:</strong></p>
      <ul class="plain-list">
        <li>Скидываем все моды на <strong>HolyCheck</strong> → "чит" = баним.</li>
        <li>Неизвестный = <a href="https://anticheat.ac/strings/" target="_blank">anticheat.ac/strings/</a> → нашло = бан.</li>
        <li>Ничего не нашло = открываем в <strong>Recaf</strong>, ищем: hitboxlimit, reach, size 0.5, bind (E). Обфусцированный код = бан.</li>
      </ul>
      ${localImg('image14.png', 'Recaf — структура классов мода')}
      ${localImg('image79.png', 'Recaf — пример подозрительного mixin')}
      <p><strong>Что проверять в Recaf:</strong></p>
      <ul class="plain-list">
        <li><em>Fabric:</em> method_5857 (setBoundingBox), class_239 (HitResult), class_1799 (ItemStack).</li>
        <li><em>Forge:</em> func_174826_a (setBoundingBox), RayTraceResult, EntityRayTraceResult.</li>
        <li><em>LabyMod3:</em> метод a и класс dci, dcl/dck, bmb (ItemStack).</li>
      </ul>
      ${localImg('image86.png', 'Пример хитбоксов в Recaf — Fabric')}
      ${localImg('image99.png', 'DeepSeek — анализ кода мода')}
      <p><strong>XRay:</strong> открываем assets → minecraft → models → block. Видим XRay-файлы = бан. В .json ищем <code>Copyright 2018 Filmjolk David Grindholmen</code>.</p>
    `,
    steps: [
      "Скинуть все моды на HolyCheck.",
      "Неизвестные → anticheat.ac/strings.",
      "Ничего нет → открыть в Recaf, искать подозрительные классы.",
      "Обфусцированный код = бан.",
      "Скопировать классы в DeepSeek для анализа.",
    ],
  },

  // ── 12  JournalTrace ─────────────────────────────────────────────────────
  {
    title: "JournalTrace",
    tag: "Журнал ФС",
    intro: "Journal Trace анализирует USN-журнал файловой системы Windows — все операции с файлами.",
    callout: { label: "⬇️ Скачать", text: "Доступен через HolyCheck." },
    calloutLink: { href: "https://mods.holyworld.me/download", label: "Перейти на HolyWorld ↗" },
    content: `
      ${localImg('image37.png', 'Внешний вид Journal Trace')}
      <p><strong>Journal Trace обязательно должен лежать на том же диске, который сканирует!</strong></p>
      <p>Открываем → <strong>drive → disc C/D → Select → Scan → Layout → Data Grid</strong>.</p>

      <div class="section-title" style="margin-top:20px;margin-bottom:8px">Строка 1 — Общий поиск по папке игрока</div>
      ${codeBlock(`directory:путь_к_папке;name:!!.`)}
      ${localImg('image19.png', 'Результат строки 1 в Journal Trace')}
      <p>Сортируем по Date. Удаление файлов после проверки = бан.</p>

      <div class="section-title" style="margin-top:20px;margin-bottom:8px">Строка 2 — config, mods, logs, addons</div>
      ${codeBlock(`directory:путь_к_папке;directory:config||mods||logs||addons`)}
      ${localImg('image34.png', 'Журнал трейс — очистка логов')}
      <p>Очистка логов вручную = бан. Запрещённые имена в модах/конфигах = бан.</p>

      <div class="section-title" style="margin-top:20px;margin-bottom:8px">Строка 3 — .jar/.zip/.rar на всех дисках</div>
      ${codeBlock(`directory::;name:.jar||.zip||.rar;name:!!.lnk`)}
      ${localImg('image46.png', 'Поиск .jar и архивов в Journal Trace')}
      <p>Для диска C и всех других дисков. Удаление после начала проверки = бан.</p>

      <div class="section-title" style="margin-top:20px;margin-bottom:8px">Строка 4 — Загрузки и рабочий стол</div>
      ${codeBlock(`directory:Downloads||Desktop`)}
      ${localImg('image8.png', 'Journal Trace — Downloads и Desktop')}
      ${localImg('image101.png', 'Пример удаления из загрузок')}
      ${localImg('image83.png', 'Пример с запрещённым именем файла')}
      ${localImg('image29.png', 'Итоговый вид Journal Trace с находками')}
    `,
    steps: [
      "Положить Journal Trace на тот же диск что и Minecraft.",
      "drive → disc C/D → Select → Scan → Layout → Data Grid.",
      "Строка 1 — общий поиск по папке игрока.",
      "Строка 2 — config/mods/logs/addons.",
      "Строка 3 — .jar/.zip/.rar на всех дисках.",
      "Строка 4 — Downloads/Desktop.",
    ],
  },

  // ── 13  SimpleUnlocker ───────────────────────────────────────────────────
  {
    title: "SimpleUnlocker",
    tag: "Файловые замки",
    intro: "Позволяет увидеть и разблокировать файлы заблокированные запущенными процессами.",
    callout: { label: "⬇️ Скачать", text: "simpleunlocker.ds1nc.ru" },
    calloutLink: { href: "https://simpleunlocker.ds1nc.ru/release/simpleunlocker_release.zip", label: "Скачать ↗" },
    content: `
      ${localImg('image44.png', 'Внешний вид Simple Unlocker')}
      <ul class="plain-list">
        <li>Скачиваем игроку, запускаем.</li>
        <li><strong>Разблокировка ограничений → Начать сканирование</strong>.</li>
        <li>Видим дебаггеры — найти файл в Everything, снять ограничение.</li>
        <li>Открыть файл — лоадер/клинер = бан.</li>
      </ul>
    `,
    steps: [
      "Скачать игроку SimpleUnlocker.",
      "Разблокировка ограничений → Начать сканирование.",
      "Дебаггеры → найти файл в Everything, снять ограничение.",
      "Открыть файл — лоадер = бан.",
    ],
  },

  // ── 14  Eventvwr ─────────────────────────────────────────────────────────
  {
    title: "Eventvwr",
    tag: "События Windows",
    intro: "Встроенный просмотрщик событий Windows. Помогает найти логи удаления .exe файлов.",
    callout: { label: "📌 Запуск", text: "Win + R → eventvwr → Enter" },
    content: `
      ${localImg('image60.png', 'Eventvwr — просмотр событий Windows')}
      ${localImg('image76.png', 'Поиск процесса fsutil.exe в журнале')}
      <p>Если есть чистка процесса <code>fsutil.exe</code> — это логи удаления exe. <strong>Только за это нельзя банить</strong> — используем как вспомогательный инструмент.</p>
      ${localImg('image4.png', 'Пример записи fsutil.exe')}
      ${localImg('image106.png', 'Детали события удаления exe')}
    `,
    steps: [
      "Win+R → eventvwr → Enter.",
      "Искать записи с процессом fsutil.exe.",
      "Использовать как вспомогательный инструмент — не банить только за это.",
      "Сопоставлять с данными из других инструментов.",
    ],
  },

  // ── 15  RegScanner ───────────────────────────────────────────────────────
  {
    title: "RegScanner",
    tag: "Реестр",
    intro: "Программа для поиска записей реестра Windows. Помогает найти следы инжекта через .dll файлы.",
    callout: { label: "⬇️ Скачать", text: "NirSoft — RegScanner" },
    calloutLink: { href: "https://www.nirsoft.net/utils/regscanner.html", label: "Перейти ↗" },
    content: `
      ${localImg('image90.png', 'Настройки поиска в RegScanner')}
      <p>После загрузки смотрим на две записи:</p>
      <p><strong>Запись 1:</strong> Registry Key: <code>RecentDocs\\.dll</code> | Name: <code>MRUListEx</code> | дата &lt;14 дней.</p>
      <p><strong>Запись 2:</strong> Registry Key: <code>ComDlg32\\OpenSavePidlMRU\\.dll</code> | Name: <code>MRUListEx</code> | дата &lt;14 дней.</p>
      ${localImg('image55.png', 'Результат RegScanner — подозрительная запись .dll')}
      <p>Нашли → открываем <strong>LastActivityView</strong>, смотрим: запускался ли инжектор незадолго до этой даты = бан. Если нет → dll на <a href="https://anticheat.ac/strings/" target="_blank">anticheat.ac/strings/</a>.</p>
      <p>В причине бана: <strong>инжект dll / запрет dll</strong>.</p>
    `,
    steps: [
      "Запустить RegScanner, дождаться загрузки.",
      "Найти RecentDocs\\.dll с MRUListEx за 14 дней.",
      "Найти ComDlg32\\OpenSavePidlMRU\\.dll с MRUListEx за 14 дней.",
      "Открыть LastActivityView — инжектор незадолго до даты = бан.",
      "Dll — на anticheat.ac/strings.",
    ],
  },

  // ── 16  PowerShell ───────────────────────────────────────────────────────
  {
    title: "PowerShell",
    tag: "Скрипты",
    intro: "Собственный чекер + проверка служб, истории команд и доступности сайтов.",
    callout: { label: "📌 Запуск", text: "Запускать от имени администратора." },
    content: `
      ${localImg('image64.png', 'Запуск PowerShell чекера')}
      <p><strong>После запуска чекера:</strong></p>
      <ul class="plain-list">
        <li>Службы <strong>Sysmain, EventLog, Dcomlaunch</strong> выключены = бан на 7 дней.</li>
        <li>Подозрительные .exe → ищем в Everything. Лоадер = бан.</li>
        <li>Чистка Journal Trace (fsutil.exe) = бан на 14 дней.</li>
      </ul>
      ${localImg('image53.png', 'Результат чекера — проверка служб')}
      ${localImg('image92.png', 'История PowerShell — PSReadLine')}
      <p><strong>История PowerShell:</strong> <code>Win+R → shell:recent</code> → windows → powershell → PSReadLine → .txt файл.</p>
      <p><strong>Проверка сайтов (вставить в PowerShell):</strong></p>
      ${codeBlock(`$sites="fluddy.com","anticheat.ac","mods.holyworld.me","github.com","voidtools.com","privazer.com","nirsoft.net","sourceforge.net","simpleunlocker.ds1nc.ru"; function Test-Site($u){ $r=@(); if(Select-String -Path "$env:SystemRoot\\System32\\drivers\\etc\\hosts" -Pattern "(?mi)^\\s*?\\d.+?$($u.Replace('.','\\.'))\\s*$"){$r+="HOSTS"}; try{if((Resolve-DnsName $u -ErrorAction Stop -Type A|% IPAddress)-like'127.*'){$r+="DNS_LOOPBACK"}}catch{}; if($r.Count-gt0){"$u → БЛОКИРОВКА: $($r-join', ')"}else{"$u → OK"}}; $sites|%{Test-Site $_}`)}
      ${localImg('image31.png', 'Результат проверки сайтов PowerShell')}
    `,
    steps: [
      "Запустить чекер от администратора.",
      "Проверить службы Sysmain, EventLog, Dcomlaunch.",
      "Win+R → shell:recent → PSReadLine → история команд.",
      "Вставить скрипт проверки сайтов.",
    ],
  },

  // ── 17  System Informer ──────────────────────────────────────────────────
  {
    title: "System Informer",
    tag: "Процессы",
    intro: "Продвинутый диспетчер задач. Ищем запрещённые моды, инжект-читы и подозрительные dll.",
    callout: { label: "⬇️ Скачать", text: "systeminformer.com" },
    calloutLink: { href: "https://systeminformer.com/downloads.php", label: "Скачать ↗" },
    content: `
      ${localImg('image103.png', 'System Informer — главное окно')}
      <p><strong>Первый запуск:</strong> System → Options → General → Enable kernel-mode driver → галочка → перезагрузка.</p>
      ${localImg('image72.png', 'Включение kernel-mode driver')}
      <p><strong>Network:</strong> <code>Ctrl+K → javaw.exe</code> → вкладка Network. Remote address 192.168.x.x = бан.</p>
      ${localImg('image66.png', 'javaw.exe — вкладка Network')}
      <p><strong>Unloaded modules</strong> (ПКМ по javaw.exe → Miscellaneous → Unloaded modules):</p>
      <table class="ref-table">
        <thead><tr><th>Вес</th><th>Чит</th></tr></thead>
        <tbody>
          <tr><td>1.42 mb</td><td>Хитбоксы (проверять, может ложно)</td></tr>
          <tr><td>1.43 mb</td><td>dauntiblyat.dll</td></tr>
          <tr><td>1.52 mb</td><td>Хитбоксы</td></tr>
          <tr><td>1.54 mb</td><td>Хитбоксы</td></tr>
          <tr><td>9.6–9.7 mb</td><td>akimus dll</td></tr>
          <tr><td>11.5 mb</td><td>fallen client</td></tr>
          <tr><td>4.7–4.8 mb</td><td>trigger bot</td></tr>
          <tr><td>5.42 mb</td><td>doomsday dll</td></tr>
          <tr><td>2.2 mb</td><td>leaf Huina</td></tr>
          <tr><td>801–836 kb</td><td>drive86.dll</td></tr>
          <tr><td>114 kb</td><td>blessed client.dll</td></tr>
          <tr><td>3.7 mb</td><td>pandora dll</td></tr>
          <tr><td>27.85–27.86 mb</td><td>system dll (hitbox)</td></tr>
        </tbody>
      </table>
      ${localImg('image71.png', 'Unloaded modules в System Informer')}
      <p><strong>DPS проверка:</strong> ищем DPS → go to process → Memory → Strings (значение 4). Вставляем regex:</p>
      ${codeBlock(`^!![A-Z]((?!Exe).)*$`)}
      ${codeBlock(`!0!`)}
      ${localImg('image59.png', 'DPS — Memory Strings')}
      ${localImg('image49.png', 'DPS — результаты поиска')}
      <p><strong>dcomlaunch:</strong> аналогично DPS, filter: <code>-jar</code>.</p>
      ${localImg('image96.png', 'dcomlaunch — поиск .jar')}
      <p><strong>javaw.exe Strings (regex, case-insensitive):</strong></p>
      ${codeBlock(`(?i)(4aNT>jeSE@I"KE\\)PQ07|prlgQZGLbPCtCOg|dreampool|TriggerBOT|forge\\.commons\\.|ZDCoder|radioegor146|chs/Main|chs/Profiller|areyoufuckingdump|vape\\.gg|www\\.vape\\.gg|VAPE4DLL|CREATED_BY_WHYMADUD|oeshb|h1tb0x|ch0ffa_box|onupdate|tickupdate|BreakHitsOn|waoHITBOXES|chs/|HRCRHIIIq|RHOOOCCC5\\.e|listSpritesure|Zero/Time|GetDiskId|afefefeffe|\\.crlc\\)|\\(ITK;J\\)V|ClickPearl|Noise\\sClient|stubborn\\.website|xameleon\\.html|x/mo/c|E\\sS\\sP|EEEFFFHHHHJJJJM|NNNNNNNNN\\{\\{\\{\\{\\{|3333NNNNgigg|kkkyik\\^\\^ZkBBB2221KKYHYeYVY|Hitbox:|Reach:|b/time|BaoBab:)`)}
      ${localImg('image38.png', 'javaw.exe — Memory Strings с regex')}
      ${localImg('image24.png', 'Пример срабатывания на чит в javaw')}
      ${localImg('image65.png', 'Пример детекта DoomsDay в Strings')}
      ${localImg('image56.png', 'Пример детекта Vape в Strings')}
      ${localImg('image100.png', 'Итоговый вид с результатами проверки')}
    `,
    steps: [
      "Enable kernel-mode driver → перезагрузить.",
      "Ctrl+K → javaw.exe → Network → проверить remote address.",
      "ПКМ → Unloaded modules → проверить веса dll.",
      "Подозрительные dll → Everything → anticheat.ac/strings.",
      "DPS: Memory → Strings → regex-строки.",
      "dcomlaunch: Memory → Strings → filter '-jar'.",
      "javaw.exe: Memory → Strings → общий regex.",
    ],
  },

  // ── 18  Таблица dll, jar ─────────────────────────────────────────────────
  {
    title: "Таблица dll, jar",
    tag: "Справочник",
    intro: "Справочная таблица известных подозрительных файлов с описанием метода детекта.",
    callout: { label: "📌 Совет", text: "Используйте как справочник при анализе находок из других инструментов." },
    content: `
      <table class="ref-table">
        <thead><tr><th>Файл / Чит</th><th>Вес</th><th>Метод детекта</th></tr></thead>
        <tbody>
          <tr><td>Vape V4</td><td>11 210 / 12 000 кб</td><td>Ocean / Appinfo / EchoScanner / Strings javaw.exe / DPS</td></tr>
          <tr><td>Vape V3</td><td>3614 кб</td><td>Ocean / String javaw.exe / DPS / Pca</td></tr>
          <tr><td>DoomsDay (dll)</td><td>5510 кб</td><td>System Informer / Разбор .dll</td></tr>
          <tr><td>Doomsday (jar)</td><td>29–30 000 кб</td><td>Strings PH / SS / WinRar / Ocean / dcomlaunch</td></tr>
          <tr><td>Blessed Client</td><td>6435–26435 кб</td><td>Ocean / Strings javaw.exe / CrashLog</td></tr>
          <tr><td>Blessed Crack</td><td>904 кб</td><td>zov\blessed\crack\by\laqwrt</td></tr>
          <tr><td>Drip Client</td><td>28 430 кб</td><td>Ocean / RedLotus / EchoScanner</td></tr>
          <tr><td>Squad Client</td><td>~25 МБ</td><td>Strings javaw.exe / Name - Sound.mp3</td></tr>
          <tr><td>Cortex Legit 3.0</td><td>7363 кб</td><td>.o в Temp / Stubborn.Website / Appinfo</td></tr>
          <tr><td>Cortex Crack</td><td>15 251 / 17 625 кб</td><td>System Informer / Разбор .dll</td></tr>
          <tr><td>Dreampool</td><td>27 450 кб</td><td>Strings javaw.exe (MagicTheInjecting)</td></tr>
          <tr><td>Vertzah Client</td><td>1526 кб</td><td>System Informer / Разбор .dll</td></tr>
          <tr><td>vec.dll</td><td>30 кб</td><td>System Informer / Разбор .dll</td></tr>
          <tr><td>Avalone Red</td><td>824 / 21 764 кб</td><td>Ocean / DPS / Conhost / PcaClient</td></tr>
          <tr><td>Avalone Green</td><td>987 / 726 / 1600 кб</td><td>Ocean / DPS / Conhost / PcaClient</td></tr>
          <tr><td>Avalone Blue</td><td>765 кб</td><td>Ocean / DPS / Conhost / PcaClient</td></tr>
          <tr><td>Virgin Client (Ghost)</td><td>1.7–1.9 МБ</td><td>net\smoothboot\client\module\combat</td></tr>
          <tr><td>ThunderHack</td><td>5847 кб</td><td>thunder\hack</td></tr>
          <tr><td>Troxill Crack</td><td>167 / 1457 кб</td><td>ru\zdcoder\troxill\modules / System Informer</td></tr>
          <tr><td>NeverHook Legit</td><td>2486 кб</td><td>System Informer / Разбор .dll</td></tr>
          <tr><td>Hitboxs Neat</td><td>19–188 кб</td><td>vazkii\neat (нет HealthBarRenderer)</td></tr>
          <tr><td>Hitboxs Creative Core</td><td>99–104 кб</td><td>creativecore\Start.class</td></tr>
          <tr><td>Hitboxs MinecraftOptimization</td><td>69 кб</td><td>dev\minecraftoptimization</td></tr>
          <tr><td>Hitboxs bushroot</td><td>8–21 кб</td><td>me\bushroot</td></tr>
          <tr><td>Hitboxs ChunkAnimator</td><td>7 кб</td><td>com\magma4496\Creatormagma.class</td></tr>
          <tr><td>FabricHits</td><td>11 кб</td><td>net\fabricmc\example\ExampleMod.class</td></tr>
          <tr><td>Ghost-клиент</td><td>149 кб</td><td>eu\me, MainClass.class</td></tr>
          <tr><td>Ammit Client</td><td>17 698 кб</td><td>Ocean / Strings javaw.exe / DPS</td></tr>
          <tr><td>Laze Client</td><td>118 кб + .dll 3613 кб</td><td>Strings javaw.exe / DPS / PcaSvc</td></tr>
          <tr><td>Imperator Client</td><td>9243 кб</td><td>Ocean / DPS / PcaClient / CrashLog</td></tr>
          <tr><td>MP3 Dllhost (Anapa V4)</td><td>9180 кб</td><td>CrashLog / Stubborn.Website / Appinfo</td></tr>
          <tr><td>Autoreconnect (goodman)</td><td>17/42 кб</td><td>me\goodman (в LabyMod)</td></tr>
          <tr><td>ALLATORI hb</td><td>7 кб</td><td>ALLATORI, букв. .class</td></tr>
          <tr><td>Безымянный dll</td><td>1525 / 1397 / 13591 кб</td><td>System Informer / Разбор .dll</td></tr>
        </tbody>
      </table>
    `,
    steps: [
      "Использовать таблицу как справочник при анализе.",
      "Сверять вес и метод детекта с другими инструментами.",
      "Пополнять по мере нахождения новых читов.",
    ],
  },

];

// ════════════════════════════════════════════════════════════════════════════
//  STATE & INIT
// ════════════════════════════════════════════════════════════════════════════
let visitedPages = new Set();
let currentPage  = 0;

function buildNav() {
  const nav = document.getElementById('sidebarNav');
  pages.forEach((p, i) => {
    const item = document.createElement('div');
    item.className     = 'nav-item' + (i === 0 ? ' active' : '');
    item.dataset.index = i;
    item.innerHTML = `
      <span class="nav-num">${String(i + 1).padStart(2, '0')}</span>
      <span class="nav-dot"></span>
      <span>${p.title.trim()}</span>
    `;
    item.addEventListener('click', () => goToPage(i));
    nav.appendChild(item);
  });
}

function buildPages() {
  const container = document.getElementById('pagesContainer');
  pages.forEach((p, i) => {
    const page     = document.createElement('div');
    page.className = 'page' + (i === 0 ? ' active' : '');
    page.id        = `page-${i}`;

    const stepsHTML       = p.steps.map(s => `<li>${s}</li>`).join('');
    const calloutLinkHTML = p.calloutLink
      ? `<a href="${p.calloutLink.href}" class="callout-link" target="_blank" rel="noopener">${p.calloutLink.label}</a>`
      : '';
    const prevBtn = i > 0
      ? `<button class="nav-btn" onclick="goToPage(${i - 1})">← Назад</button>`
      : '';
    const nextBtn = i < pages.length - 1
      ? `<button class="nav-btn primary" onclick="goToPage(${i + 1})">Далее →</button>`
      : `<button class="nav-btn primary" disabled>✓ Завершено</button>`;

    page.innerHTML = `
      <div class="page-tag">· ${p.tag} ·</div>
      <h1>${highlightFirstWord(p.title.trim())}</h1>
      <p class="page-intro">${p.intro}</p>
      <div class="divider"></div>
      <div class="section-title">Описание</div>
      <div class="content-body">${p.content}</div>
      <div class="callout">
        <strong>${p.callout.label}</strong>
        ${p.callout.text}
        ${calloutLinkHTML}
      </div>
      <div class="section-title" style="margin-top:30px">Шаги</div>
      <ol class="steps">${stepsHTML}</ol>
      <div class="nav-buttons">${prevBtn}${nextBtn}</div>
    `;
    container.appendChild(page);
  });
}

function goToPage(index) {
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.page').forEach(el => el.classList.remove('active'));
  const navItem = document.querySelector(`.nav-item[data-index="${index}"]`);
  const pageEl  = document.getElementById(`page-${index}`);
  if (!navItem || !pageEl) return;
  navItem.classList.add('active');
  pageEl.classList.add('active');
  document.getElementById('breadcrumbCurrent').textContent = pages[index].title.trim();
  document.getElementById('chapterBadge').textContent      = `Ch. ${String(index + 1).padStart(2, '0')}`;
  currentPage = index;
  visitedPages.add(index);
  updateProgress();
  document.querySelector('.content-scroll').scrollTo({ top: 0, behavior: 'smooth' });
  navItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  closeSidebar();
}

function updateProgress() {
  const pct = Math.round((visitedPages.size / pages.length) * 100);
  document.getElementById('progressFill').style.width    = pct + '%';
  document.getElementById('progressText').textContent    = `${visitedPages.size} / ${pages.length}`;
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('open');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('open');
}

function highlightFirstWord(title) {
  const words = title.split(' ');
  words[0] = `<em>${words[0]}</em>`;
  return words.join(' ');
}

buildNav();
buildPages();
visitedPages.add(0);
updateProgress();