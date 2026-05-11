// ════════════════════════════════════════════════════════════════════════════
//  HELPERS
// ════════════════════════════════════════════════════════════════════════════
function localImg(file, caption) {
  if (typeof IMG === 'undefined') return '';
  const key = file.replace('.png', '');
  const src = IMG[key];
  if (!src) return '';
  const cap = caption ? `<p class="img-caption">${caption}</p>` : '';
  return `<img class="content-img" src="${src}" alt="${caption || ''}" loading="lazy">${cap}`;
}

function codeBlock(text) {
  return `<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">copy</button><pre>${text}</pre></div>`;
}

function copyCode(btn) {
  const text = btn.nextElementSibling.textContent;
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = 'copied!';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'copy'; btn.classList.remove('copied'); }, 2000);
  });
}

// ════════════════════════════════════════════════════════════════════════════
//  PAGES
// ════════════════════════════════════════════════════════════════════════════
const pages = [

  // ══════════════════════════════════════════════════════════
  // 00  ОЗНАКОМЛЕНИЕ
  // ══════════════════════════════════════════════════════════
  {
    title: "Ознакомление",
    tag: "Введение",
    intro: "Желательно проводить проверку по тому, как расставлены программы. Если нашли ошибки или хотите что-то добавить — пишите автору. Мануал написан <strong>iqxpeax</strong>.",
    content: `
      <p>Перед началом работы скачайте все программы из списка ниже. Большинство из них портативные — достаточно распаковать и запустить. Держите все утилиты в одной папке для быстрого доступа.</p>
      <p>Большинство программ скачиваются здесь: <a href="https://mods.holyworld.me/download" target="_blank" rel="noopener">mods.holyworld.me/download ↗</a></p>

      <ul class="link-list">
        <li><span>Everything 1.5 (alpha) — поиск файлов по системе</span><a href="https://www.voidtools.com/Everything-1.5.0.1391a.x86.zip" target="_blank" rel="noopener">скачать</a></li>
        <li><span>BamParser — история запусков .exe через службу BAM</span><a href="https://github.com/spokwn/BAM-parser/releases/download/v1.2.9/BAMParser.exe" target="_blank" rel="noopener">скачать</a></li>
        <li><span>InjGen — поиск JVMTI-инжекта в процессах javaw</span><a href="https://github.com/NotRequiem/InjGen" target="_blank" rel="noopener">github</a></li>
        <li><span>RegScanner — поиск и просмотр записей реестра Windows</span><a href="https://www.nirsoft.net/utils/regscanner.html" target="_blank" rel="noopener">скачать</a></li>
        <li><span>BrowserDownloadView — история загрузок из всех браузеров</span><a href="https://www.nirsoft.net/utils/web_browser_downloads_view.html" target="_blank" rel="noopener">скачать</a></li>
        <li><span>Ocean CLI — для запуска на компьютере игрока</span><a href="https://anticheat.ac/downloads/general/cli" target="_blank" rel="noopener">скачать</a></li>
        <li><span>ShellBag Analyzer — история папок в Проводнике</span><a href="https://privazer.com/ru/shellbag_analyzer_cleaner.exe" target="_blank" rel="noopener">скачать</a></li>
        <li><span>RecentFileView — список недавно открытых файлов</span><a href="https://www.nirsoft.net/utils/recentfilesview.zip" target="_blank" rel="noopener">скачать</a></li>
        <li><span>ExecutedProgramsList — все программы когда-либо запускавшиеся на ПК</span><a href="https://www.nirsoft.net/utils/executedprogramslist.zip" target="_blank" rel="noopener">скачать</a></li>
        <li><span>UsbDriveLog — лог подключений USB-накопителей</span><a href="https://www.nirsoft.net/utils/usbdrivelog.zip" target="_blank" rel="noopener">скачать</a></li>
        <li><span>UsbDeview — история всех USB-устройств</span><a href="https://www.nirsoft.net/utils/usb_devices_view.html" target="_blank" rel="noopener">скачать</a></li>
        <li><span>Recaf — декомпилятор Java для анализа .jar файлов</span><a href="https://sourceforge.net/projects/recaf.mirror/files/latest/download" target="_blank" rel="noopener">скачать</a></li>
        <li><span>Journal Trace — журнал файловой системы NTFS</span><a href="https://mods.holyworld.me/download" target="_blank" rel="noopener">holycheck</a></li>
        <li><span>Simple Unlocker — снятие блокировок с файлов</span><a href="https://simpleunlocker.ds1nc.ru/release/simpleunlocker_release.zip" target="_blank" rel="noopener">скачать</a></li>
        <li><span>System Informer — анализ процессов, памяти, сети</span><a href="https://systeminformer.com/downloads.php" target="_blank" rel="noopener">скачать</a></li>
      </ul>

      <p>Проверить моды на запрещённый функционал: <a href="https://mods.holyworld.me/mods-review" target="_blank" rel="noopener">mods.holyworld.me/mods-review</a></p>

      <div class="section-title">Быстрые строки для Journal Trace</div>
      <p>Эти строки вставляются в каждой проверке. Подробное описание — в разделе Journal Trace.</p>
      ${codeBlock(`directory:путь_к_папке;name:!!.`)}
      ${codeBlock(`directory:путь_к_папке;directory:config||mods||logs||addons`)}
      ${codeBlock(`directory::;name:.jar||.zip||.rar;name:!!.lnk`)}
      ${codeBlock(`directory:Downloads||Desktop`)}

      <div class="callout">
        <strong>⚠ Обязательно</strong>
        Все списки для Everything, Journal Trace и System Informer являются обязательными при каждой проверке. Пропуск любого из них — устный выговор.
      </div>
    `,
    callout: null,
    calloutLink: null,
    steps: [
      "Скачать все программы из списка выше.",
      "Проверять строго в порядке, указанном в боковом меню.",
      "InjGen запускать самым первым — до Ocean. После Ocean даёт ложное срабатывание.",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 01  ПРОВЕРКА ИГРЫ
  // ══════════════════════════════════════════════════════════
  {
    title: "Проверка игры",
    tag: "Майнкрафт",
    intro: "В данном разделе рассмотрим как находить читы внутри Minecraft и в папках игры. Начинаем сразу после подключения к проверке — до того как игрок успеет что-либо закрыть.",
    content: `
      <div class="section-title">Часть 1 — Внутри Minecraft</div>

      <p><strong>Шаг 1 — Заголовок окна.</strong> Просим нажать <code>F11</code> для перехода в оконный режим. Смотрим на заголовок окна. Название чит-клиента = <strong>бан</strong>.</p>
      
      <p><strong>Шаг 2 — Отладочный экран F3.</strong> Жмём <code>F3</code>. В верхнем левом углу — строка с версией клиента. Название чита = <strong>бан</strong>.</p>
      ${localImg('image36.png', 'Скриншот 1 — Экран F3 ')}
      
      <p><strong>Шаг 3 — Управление.</strong> ESC → Настройки → Управление. Листаем весь список клавиш. Видим биндинги запрещённых функций (KillAura, Freecam, X-Ray Enable, AutoAttack и т.п.) = <strong>бан</strong>.</p>
      ${localImg('image112.png', 'Скриншот 2 — Настройки')}
      ${localImg('image105.png', 'Скриншот 3 — Управление')}
      ${localImg('image22.png', 'Скриншот 4 — Клавиши')}

      <p><strong>Шаг 4 — Наборы ресурсов.</strong> ESC → Наборы ресурсов → Папка с наборами реурсов. Смотрим список установленных ресурспаков. Запрещённые (X-Ray паки) = <strong>бан</strong>.</p>
      ${localImg('image3.png', 'Скриншот 5 — вкладка "Наборы ресурсов". Ищем X-Ray или другие запрещённые паки.')}

      <div class="section-title">Часть 2 — Показ скрытых файлов</div>
      <p>Перед проверкой папок — обязательно включаем отображение скрытых файлов и папок, иначе можно пропустить скрытые директории читов.</p>

      <p><strong>Windows 10:</strong> открыть любую папку → Вид → Параметры → Изменить параметры папок и поиска → вкладка Вид → включить галочки как на скриншоте.</p>
      ${localImg('image111.png', 'Скриншот 6 — настройки показа скрытых файлов в Windows 10. Включаем "Показывать скрытые файлы, папки и диски" и показываем расширения файлов.')}

      <p><strong>Windows 11:</strong> три точки (···) в верхней панели папки → Параметры → вкладка Вид → те же настройки.</p>
      
      <div class="section-title">Часть 3 — Папка .minecraft</div>
      <p>Переход: ESC → Наборы ресурсов → Открыть папку → перейти на уровень выше. Или через <code>Win+R → %appdata%\\.minecraft</code>.</p>

      <ul class="plain-list">
      <li><strong>mods, versions, config, labymod, labymod-neo, libraries</strong> — Нам нужны именно эти папки им мы будем проверять</li>
      </ul>
      
      <p>Сначала смотрим корень папки — нет ли директорий с именами читов (baritone, meteor-client, vape и т.д.).</p>
      ${localImg('image81.png', 'Скриншот 7 — Нужные папки , .minecraft ')}
      
      <p>Затем проверяем следующие подпапки:</p>
      
      <ul class="plain-list">
      <li><strong>config</strong> — конфигурационные файлы всех модов. Ищем файлы с именами запрещённых модов или читов. Дата модификации менее 14 дней = <strong>бан</strong>.</li>
      </ul>
      ${localImg('image41.png', 'Скриншот 8 — Папка .config')}
      
      <ul class="plain-list">
      <li><strong>versions</strong> — установленные версии клиента. Название папки = имя чита + дата менее 14 дней = <strong>бан</strong>. Если дата более 14 дней — открываем: пустая = пропускаем, есть .jar = <strong>бан за хранение</strong>. Сравниваем вес .jar с таблицей оригинальных весов ниже.</li>
      </ul>
      ${localImg('image95.png', '.versions.')}
      ${localImg('image32.png', 'Скриншот 9 — Проверка .versions .')}
      ${localImg('image54.png', 'Скриншот 11 — LabyMod Neo - .versions .')}
      
      <ul class="plain-list">
      <li><strong>mods</strong> — моды. Ищем файлы с именами запрещенных модов, Пример MarlowCrystalOptimazer, ElytraSwap, ClickPearl и т.д все перечисленное = <strong>бан</strong>.</li>
      </ul>
      ${localImg('image110.png', 'Скриншот 12 - Пример запрещённых модов в папке .mods.')}

      
        
        <ul class="plain-list">
        <li><strong>libraries</strong> — В этой пункте нам нужны папки; com, net</li>
        </ul>
        ${localImg('image113.png', 'Скриншот 17 — папка libraries.')}
        
        <ul class="plain-list">
        <li><strong>com</strong> — В данной папке нас интересуют папки github в ней мы ищем папки impact, impact development, дата < 14 дней = <strong>бан</strong></li>
        </ul>  
        ${localImg('image45.png', 'Скриншот 13 — github.')}
        ${localImg('image21.png',  'софты')}

        
        <ul class="plain-list">
        <li><strong>net</strong> — В данной папке нас интересуют папки minecraftxray, дата < 14 дней = <strong>бан</strong></li>
        </ul>  
        ${localImg('image57.png', 'Скриншот 18 — читы в папке .net')}

      
        
        <ul class="plain-list">
        <li><strong>Labymod</strong> — Проверяем моды Labymod , Labymod Neo</li>
        </ul>  

        <li>В папке майнкрафта переходим в .game → LabyMod → addons-1.16, Ищем софт моды</li>
        
        ${localImg('image58.png', 'Скриншот 14 — LabyMod.')}
        
        
        <li>Не нашли по названию? Закидываем все моды в HolyCheck</li>
        
        ${localImg('image70.png', 'Скриншот 16 — HolyCheck.')}

        ${localImg('image51.png', 'Скриншот 15 — HolyCheck')}


        <div class="section-title">Правильные веса оригинальных версий Minecraft</div>
        <p>Если вес .jar файла не совпадает с таблицей — файл подозрителен, проверяем через HolyCheck или Recaf.</p>
        <table class="ref-table">
        <ul class="plain-list">
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
          <tr><td>LabyMod 1.16.5</td><td>до 30 000 КБ</td></tr>
        </tbody>
      </table>

      <div class="section-title">Часть 4 — Другие лаунчеры (папка %appdata%)</div>
      <p>Нажимаем <code>Win+R → %appdata%</code>. Просматриваем другие установленные лаунчеры Minecraft:</p>
      <ul class="plain-list">
        <li><strong>.minecraft</strong> — стандартный официальный лаунчер. Уже проверили выше.</li>
        <li><strong>.tlauncher</strong> — TLauncher. Проверяем аналогично: versions, mods, config.</li>
        <li><strong>salwyr</strong> — Salwyr лаунчер. Аналогичная проверка.</li>
      </ul>

      ${localImg('image63.png',  'Остальные лаунчеры')}

      <p><strong>Lunar Client.</strong> Нажимаем <code>Win+R → .lunarclient</code>. Переходим: <strong>profiles → lunar</strong>. Открываем все версии выше 1.16, заходим во вкладку <strong>mods</strong>. Все .jar файлы скидываем на HolyCheck.</p>

      ${localImg('image91.png',  'LunarClient')}

      <div class="section-title">Часть 5 — Диски C, D и другие</div>
      <p>Проверяем корень каждого диска на папки с запрещёнными именами (celka, nursultan, vape, doomsday и т.д.):</p>
      <ul class="plain-list">
        <li>Дата модификации менее 14 дней → <strong>бан немедленно</strong>.</li>
        <li>Дата более 14 дней → открываем папку: есть .jar или .exe → <strong>бан</strong> в любом случае.</li>
      </ul>
      <p>Проделываем с каждой папкой.</p>
      ${localImg('image43.png',  'Проверка локального диска C;')}

      <div class="section-title">Часть 6 — Корзина ($RECYCLE.BIN)</div>
      <p>Переходим: диск C → <code>$RECYCLE.BIN</code> (скрытая папка, нужен показ скрытых файлов).</p>
      <ul class="plain-list">
        <li>Папки от читов + дата модификации менее 14 дней → <strong>бан</strong>.</li>
        <li>Папки от читов + дата более 14 дней → восстанавливаем, смотрим содержимое. Есть .exe или .jar → <strong>бан</strong>.</li>
        <li>Смотрим дату изменения самой корзины. Если она изменена после начала проверки → игрок удалял файлы прямо сейчас → <strong>бан</strong>.</li>
      </ul>

      ${localImg('image15.png',  '$RECYCLE.BIN')}
      ${localImg('image82.png',  'Софты в корзине')}

      <div class="section-title">Часть 7 — Загрузки, рабочий стол, документы</div>

      <p><strong>Загрузки:</strong></p>
        <li>Файл с именем чита (.exe или .jar), пример: <code>nursultan</code> → <strong>бан</strong>.</li>
        <li>Если это папка открываем если она пуста смотрим на дату модификации < 14 дней → <strong>бан</strong>.</li>
        <li>Пустая папка с именем чита + дата менее 14 дней → <strong>бан</strong> (файлы удалены, папка осталась).</li>
        <li>Если внутри есть (.jar .exe) → <strong>бан</strong> вне зависимости от даты.</li>
      </ul>

      ${localImg('image10.png',  'Софты в загрузках')}

      <li>Также смотрим на подозрительные папки .jar .exe и открываем их так же можем закинуть на HolyCheck а если открылся Doomsday, Чит → <strong>бан</strong>.</li>

      ${localImg('image9.png',   'Странный файл')}


      <li>Далее открываем Telegram Desktop в загрузках часто скачиваються софты через этот мессенджер.</li>

      ${localImg('image35.png',  'Telegram Desktop')}
      
    <ul class="plain-list">
        <li><strong>Рабочий Стол</strong> — Ищем софты .jar .exe Открываем их или закидываем на HolyCheck открылся чит → <strong>бан</strong>.</li>
    </ul>  

    ${localImg('image102.png', 'Рабочий стол')}

    <ul class="plain-list">
        <li><strong>Документы</strong> — Так же ищем .exe .jar или подозрительные папки открылся чит / название чита  → <strong>бан</strong>.</li>
    </ul>  

    ${localImg('image48.png',  'Читы в документах')}

    `,
    callout: null,
    calloutLink: null,
    steps: [
      "F11 → оконный режим → заголовок окна.",
      "F3 → строка версии на наличие имени чита.",
      "ESC → Настройки → Управление → запрещённые биндинги.",
      "ESC → Наборы ресурсов → X-Ray паки.",
      "Включить показ скрытых файлов в Windows.",
      "Проверить .minecraft: config, versions, mods, libraries, LabyMod.",
      "%appdata% — другие лаунчеры, Lunar Client моды.",
      "Диски C и D — корневые папки с запрещёнными именами.",
      "Корзина — содержимое и дата изменения самой корзины.",
      "Загрузки, Telegram Desktop, рабочий стол, документы.",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 02  EVERYTHING 1.5
  // ══════════════════════════════════════════════════════════
  {
    title: "Everything 1.5",
    tag: "Поиск файлов",
    intro: "Everything 1.5 — программа для мгновенного поиска файлов и папок по названию, весу, дате изменения и внутреннему содержимому файла (utf8content). Обязательно использовать именно alpha-версию 1.5 — в ней доступны все операторы поиска.Сдесь мы ищем хранение читов, Остатки. Обязательно использовать alpha 1.5 (Everything 1.5a) Без неё можно получить Варн",
    content: `
      <div class="section-title">Настройка перед использованием</div>
      <p>Если Everything уже установлен у игрока — сначала проверяем настройки. Игрок мог добавить папки в исключения:</p>

      <ul class="plain-list">
        <li><code>Ctrl+P → Exclude → Enable exclude list</code> — если галочка стоит, убираем её. Иначе файлы из исключённых папок не появятся в поиске.</li>
        <li>Вкладка <strong>NTFS</strong> — Включаем все галочки для каждого диска.</li>
        <li>Вкладка <strong>FAT</strong> — те же настройки для флешек. Несколько флешек — настраиваем каждую.</li>
        </ul>
      ${localImg('image1.png', 'Скриншот 1 — настройки Everything, вкладка Exclude. Убираем галочку "Enable exclude list" если она есть.')}
      ${localImg('image39.png', 'Скриншот 2 — вкладка NTFS. Включаем все галочки для каждого диска.')}
      ${localImg('image115.png', 'Скриншот 3 — вкладка FAT. Те же настройки для USB-флешек.')}

      <div class="callout">
        <strong>⚠ Все 8 списков — обязательны</strong>
        Вставляйте все списки при каждой проверке. Пропуск любого — Варн.
      </div>

      <div class="section-title">Список 1 — Поиск по именам читов (.exe и .jar)</div>
      <p>Ищет файлы с именами известных чит-клиентов среди всех .exe и .jar на компьютере. Нашло — смотрим путь, дату, запускаем. Чит = бан.</p>
      ${codeBlock(`ext:.exe;.jar regex:(?i)(shellbag|impact|wurst|bleach[-_]?hack|aristois|huzuni|skill[-_]?client|nodus|inertia|ares|sigma|meteor|atomic|zamorozka|liquid[-_]?bounce|nurik|nursultan|celestial|calestial|celka|expensive|neverhook|excellent|wexside|wild|minced|deadcode|akrien|jigsaw|future|jessica|dreampool|vape|infinity|squad|no[-_]?rules|konas|zeus[-_]?client|rich[-_]?client|ghost[-_]?client|rusher[-_]?hack|thunder[-_]?hack|moon[-_]?hack|winner|nova|exire|doomsday|nightware|ricardo|extazyy|troxill|arbuz|dauntiblyat|rename[-_]?me[-_]?please|edit[-_]?me|takker|faker|xameleon|fuze[-_]?client|wise[-_]?folder|net[-_]?limiter|feather|delta|eclipse|venus|jex|hakari|hush|hach|rogalik|catlavan|haruka|wissend|fluger|sperma|vortex|newcode|astra|britva|bariton|bot|player|freecam|bedrock|hotbar|swap|chest|gumball|tweak|entity|viabackwards|viaforge|viaproxy|hitbox|elytra|xaero|through|mob|auto|place|health|inventory|x[-_]?ray|clean[-_]?cut|smart[-_]?moving|save[-_]?searcher|world[-_]?downloader|trade[-_]?finder|chorus[-_]?find|inv[-_]?move|chunk[-_]?copy|seed[-_]?cracker|diamond[-_]?sim|forge[-_]?hax|step[-_]?up|client[-_]?commands|camera[-_]?utils|cheat[-_]?utils|universal[-_]?mod|swing[-_]?through[-_]?grass|shift[\\s_-]?tap|aim[\\s_-]?assistance|grass[\\s_-]?pas|motor[\\s_-]?assistance|player[\\s_-]?highlighter|slippery[\\s_-]?mod|entity-outliner|elytraswapperplusclient|chest[\\s_-]?esp|armor[\\s_-]?hot[\\s_-]?swap|fallen|aurora|wine[\\s_-]?launcher|sh[\\s_-]?project|trigger[\\s_-]?bot|collapse|melonity|blessed|creator1171|Spawner[\\s_-]?Locator)`)}
      
      <div class="section-title">Список 2 — Лоудеры и остатки от читов</div>
      <p>Ищет характерные имена лоудеров, клинеров и остатков от удалённых читов. Файл переименован (.exe → .png) — переименовываем обратно в .exe, запускаем. Лоудер = бан.</p>
      ${codeBlock(`nursultan|baritone|"deltaloader"|"deltaclient"|"wexside"|xameleon|takker|"newlauncher"|troxill|nemezida|doomsday|thunderhack|wisefolder|"venusfr"|.faker|vec.dll|cleancut|wildclient|SwingThroughGrass|viabackwards|viaforge|viaproxy|vialoader|viamcp|"akrien"|"dreampool"|"norules"|"invmove"|"impactclient"|richclient|rusherhack|inventory_walk|evaware|aimbot|celestial|calestial|celka|expensive|neverhook|excellent|wurst|bleachhack|aristois|huzuni|skillclient|liquidbounce|nurik|minced|deadcode|konas|nightware|extazyy|troxil|antileak|arbuz|.akr|dauntiblyat|rename_me_please|fuzeclient|double_hotbar|smart_moving|savesearcher|topkautobuy|topkaautobuy|tweakeroo|librarian_trade_finder|sacurachorusfind|entity_outliner|DiamondSim|ForgeHax|clientcommands|CutThrough|Control-Tweaks|minced|fsutil.exe-|hideme.exe|shellbag_analyzer_cleaner.ini|catlavan|deadcode|haruka|dreampool|norules|zeusclient|richclient|ghost_client|rusherhack|moonhack|ricardo|extazyy|troxill|antileak|takker|fuzeclient|wisefolder|netlimiter|USBOblivion.exe|hakari|hush|rogalik|vortexclient|caballeta|xray|aristoris|x-ray|entity_xray|invtweaks|zamorozka|vape|konas|"ghost_client"|".flauncher"|clean-main|exire|"rockstarclient"|Blast3x|Javalin|quickclient|quick|meow|monoton|dimasik|dimasikclient|weaver|weaverclient|PolyakDLC|DLC|ExosWare|ExosWareclient|launcher|Sk3dGuard|dickclient|divan|divanclient`)}

      <div class="section-title">Список 3 — Конфиги и логи запрещённых модов</div>
      <p>Ищет конфигурационные файлы с именами запрещённых модов за последние 14 дней. Даже если сам .jar удалён — конфиг часто остаётся.</p>
      ${codeBlock(`ext:.txt;.json;.toml;.yml;.cfg;.properties | folder: dm:last14days regex:(bariton|bot|player|freecam|bedrock|hotbar|swap|chest|gumball|tweak|entity|crystal|optimizer|viabackwards|viaforge|viaproxy|hitbox|elytra|xaero|through|mob|auto|place|health|inventory|x[-_]?ray|clean[-_]?cut|smart[-_]?moving|save[-_]?searcher|world[-_]?downloader|trade[-_]?finder|chorus[-_]?find|inv[-_]?move|chunk[-_]?copy|seed[-_]?cracker|diamond[-_]?sim|forge[-_]?hax|step[-_]?up|client[-_]?commands|camera[-_]?utils|cheat[-_]?utils|universal[-_]?mod|swing[-_]?through[-_]?grass|shift[\\s_-]?tap|aim[\\s_-]?assistance|grass[\\s_-]?pas|motor[\\s_-]?assistance|player[\\s_-]?highlighter|slippery[\\s_-]?mod|entity-outliner|elytraswapperplusclient|chest[\\s_-]?esp|armor[\\s_-]?hot[\\s_-]?swap|fallen|aurora|wine[\\s_-]?launcher|sh[\\s_-]?project|trigger[\\s_-]?bot|collapse|melonity|blessed|creator1171|Spawner[\\s_-]?Locator)`)}
      
      
      <p>Если ничего не нашлось то вписываем эту строку: </p>
      ${codeBlock(`size:30kb utf8content:net/minecraft/util/math/axisalignedbb | size:9400174`)}
      <p>Если выдало 30 kb файлик (vec.dll) = <strong>бан</strong> Лучше проверить потомучто есть маленький шанс ложного срабатывания — проверяйте</p>
      
      <li>Если выдало по второму размеру (mn3-чит) — открываем <code>cmd</code>, перетаскиваем туда файл, и через пробел вводим PID процесса Minecraft. Получили тот же PID что вводили — <strong>бан</strong>.</li>
      
      ${localImg('image23.png', 'Скриншот 4 - cmd.')}
      
      <p> <strong>Списки Avalon и т.д </strong> Все виды и клинеры</p>
      
      
      <div class="section-title">Список 5 — Avalone всех видов и клинеры</div>
      <p>Ищет Avalone и различные клинеры по точному размеру. Нашло — запускаем двойным кликом. Открылся Avalone, клинер или другой запрещённый софт = <strong>бан</strong>.</p>
      ${codeBlock(`*.exe size:1566208 | size:22285824 | size:1010176 | size:22433280 | size:348672 | size:352256 | size:782848 | size:6887424 | size:763392 | size:6111 | size:743424 | size:1767424 | size:823808 | size:18126848 | <size:700kb..5mb utf8content:net/minecraftforge/fml/loading/FMLLoader | glowEsp> | <size:14mb..17mb utf8content:D3D11CreateDeviceAndSwapChain|LoadLibraryA>`)}
      <p>Дополнительно — Avalone переименованный в .exe, .png, .txt (меняем расширение на .exe и запускаем):</p>
      ${codeBlock(`size:700kb..5mb ext:exe utf8content:TriggerBot|net/minecraft/entity/player/PlayerEntity`)}
      ${codeBlock(`size:700kb..5mb ext:png utf8content:TriggerBot|net/minecraft/entity/player/PlayerEntity`)}
      ${codeBlock(`size:700kb..5mb ext:txt utf8content:TriggerBot|net/minecraft/entity/player/PlayerEntity`)}
      ${localImg('image28.png', 'Скриншот 5 — ')}
      
      
      <div class="section-title">Список 6 — DoomsDay (.jar)</div>
      <p>Ищет DoomsDay по внутреннему содержимому jar-файла. Нашло — запускаем двойным кликом. Открылся думик = <strong>бан</strong>. Потом убираем <code>*.jar</code> — ищем переименованные копии, переименовываем в .jar и проверяем снова. Сканирует долго — можно вписать и идти проверять дальше параллельно.</p>
      ${codeBlock(`*.jar size:21kb-10mb utf8content:net/java/s.class utf8content:net/java/f.class`)}
      ${codeBlock(`size:21kb-10mb utf8content:net/java/s.class utf8content:net/java/f.class`)}
      
      <div class="section-title">Список 7 — Хитбоксы по размеру (.jar)</div>
      <p>Список точных размеров .jar файлов с хитбоксами. Обычно находит 0–10 файлов — проверяйте <strong>всё</strong> что найдёт. Открываем или закидываем на HolyCheck.</p>
      
      
      ${codeBlock(`size:2263|size:5266|size:6515|size:6770|size:6778|size:7016|size:7218|size:7803|size:7891|size:9327|size:10283|size:10605|size:10958|size:11554|size:16541|size:17308|size:17339|size:18180|size:18527|size:18587|size:18734|size:19266|size:20578|size:20583|size:20639|size:20883|size:21161|size:21234|size:21664|size:22036|size:22861|size:26247|size:27546|size:27809|size:28084|size:28439|size:29304|size:29567|size:30279|size:31549|size:31607|size:34449|size:34669|size:35971|size:35993|size:38149|size:39017|size:39321|size:40142|size:42782|size:47159|size:48242|size:50828|size:51212|size:52426|size:54088|size:59381|size:62782|size:65316|size:65486|size:65765|size:66659|size:67491|size:68794|size:69757|size:72334|size:74105|size:80751|size:88896|size:95530|size:98811|size:100523|size:100799|size:101297|size:101571|size:101703|size:102297|size:102733|size:103761|size:104954|size:105623|size:105672|size:112386|size:120640|size:138417|size:143006|size:143597|size:143600|size:147329|size:147873|size:151762|size:153937|size:156722|size:156779|size:166677|size:169718|size:173698|size:183634|size:183651|size:192156|size:202720|size:257482|size:263070|size:267746|size:274865|size:300286|size:334588|size:343169|size:350629|size:409616|size:410358|size:517248|size:519731|size:532826|size:539151|size:556494|size:597406|size:636621|size:640838|size:878781|size:925493|size:1077149|size:1165063|size:1181556|size:1444714|size:1471429|size:1569093|size:1822841|size:3113569|size:3425801|size:3541075|size:3541138|size:3642292|size:3684385|size:4642998|size:5630483|size:7052171|size:7059952|size:22258750|size:25704986|size:26179274|size:26691896 *.jar`)}
      
      ${localImg('image2.png', 'Скриншот 6 ')}
      
      <div class="section-title">Список 8 — Читы в .dll</div>
      <p>Ищет dll-библиотеки с читами по точному размеру. Найденные — проверяем через <a href="https://anticheat.ac/strings/" target="_blank">anticheat.ac/strings/</a>.</p>
      ${codeBlock(`*.dll size:11767808 | size:486400 | size:15294464 | size:5641728 | size:2273792 | size:819987 | size:3823616 | size:1686528 | size:1560713`)}
      
      <div class="section-title">Список 8б — Читы в .jar (хитбоксы, клиенты, триггерботы)</div>
      ${codeBlock(`*.jar size:2405 | size:2263 | size:3089 | size:4447 | size:6289 | size:7234 | size:7272 | size:8191 | size:8195 | size:9068 | size:9372 | size:10283 | size:11193 | size:14569 | size:17339 | size:19950 | size:19996 | size:20639 | size:20883 | size:24662 | size:25349 | size:26255 | size:27152 | size:27546 | size:28084 | size:34669 | size:35971 | size:51079 | size:54088 | size:65486 | size:69757 | size:90139 | size:95121 | size:95195 | size:100183 | size:102128 | size:103620 | size:104255 | size:113386 | size:114974 | size:120071 | size:137550 | size:151762 | size:170201 | size:181747 | size:186566 | size:192156 | size:257482 | size:286362 | size:335770 | size:365980 | size:380768 | size:383073 | size:434725 | size:569437 | size:612658 | size:625367 | size:895578 | size:925493 | size:967068 | size:1045107 | size:1330279 | size:1565003 | size:1822841 | size:1844101 | size:1870498 | size:3283826 | size:3372839 | size:3425801 | size:3841809 | size:4049697 | size:4059091 | size:4101247 | size:4610404 | size:4610405 | size:6009357 | size:6349526 | size:6377588 | size:6699922 | size:6731555 | size:7052171 | size:7743912 | size:11464320 | size:13650364 | size:22205672 | size:28632494 | size:44722980 | size:47608266`)}
       
      ${localImg('image109.png', 'Скриншот 7 — поиск DoomsDay в Everything. Нашло jar-файл — запускаем. Открылся думик = бан.')}
      
      <div class="section-title">Список 8в — Читы в .exe</div>
      ${codeBlock(`*.exe size:547827 | size:1309696 | size:14202368 | size:782848 | size:53760 | size:13686784 | size:28107997 | size:22763666 | size:17731024 | size:72832762 | size:8520278 | size:63326352 | size:11421787 | size:11463432 | size:743936 | size:823808 | size:9388032 | size:191206617 | size:11897599 | size:11877071 | size:16197700 | size:16192613 | size:12173155 | size:16190579 | size:16674923 | size:15361912 | size:13734493 | size:12474796 | size:12104654 | size:19521024 | size:41382400 | size:4426752 | size:5253632 | size:52722370 | size:38520304 | size:27185152`)}
      ${localImg('image17.png', 'Скриншот 8 — поиск читов в .exe по размеру. Нашло файл — запускаем, открылся чит = бан.')}
      ${localImg('image73.png', 'Скриншот 9 — пример результатов поиска по размеру .exe. Открываем каждый подозрительный файл.')}

      <div class="section-title">Необязательные, но полезные списки</div>
      <p><strong>Замаскированные .exe и .dll</strong> — показывает исполняемые файлы, переименованные в .zip, .rar, .txt, .mp3 и т.д. Переименовываем в .exe, запускаем или открываем блокнотом и копируем код в нейросеть. Открылся чит или нейросеть подтвердила — бан.</p>
      ${codeBlock(`da:[currentDate] !.exe !.dll size:700kb..30mb file: content:"This program cannot be run in DOS mode."`)}
      <p><strong>Все .exe весом 5–55 МБ</strong> — открываем каждую с подозрительным или системным именем. Открылся лоудер = бан.</p>
      ${codeBlock(`size:5mb..55mb ext:exe`)}
    `,
    callout: null,
    calloutLink: null,
    steps: [
      "Проверить настройки: Exclude выключен, NTFS и FAT — все диски.",
      "Список 1 — имена читов (.exe и .jar).",
      "Список 2 — лоудеры и остатки.",
      "Список 3 — конфиги запрещённых модов (14 дней).",
      "Список 4 — vec.dll и mp3-чит.",
      "Список 5 — Avalone и клинеры (+ переименованные варианты).",
      "Список 6 — DoomsDay (обе строки).",
      "Список 7 — хитбоксы по размеру .jar.",
      "Список 8 — читы в .dll, .jar, .exe.",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 03  BAMPARSER + INJGEN
  // ══════════════════════════════════════════════════════════
  {
    title: "BamParser + InjGen",
    tag: "История запусков",
    intro: "BamParser показывает все .exe файлы, которые когда-либо запускались через службу BAM (Background Activity Moderator) Windows. InjGen — инструмент для обнаружения активного JVMTI-инжекта в процессах Minecraft.",
    content: `
      <ul class="link-list">
        <li><span>BamParser v1.2.9</span><a href="https://github.com/spokwn/BAM-parser/releases/download/v1.2.9/BAMParser.exe" target="_blank" rel="noopener">скачать</a></li>
        <li><span>InjGen</span><a href="https://github.com/NotRequiem/InjGen" target="_blank" rel="noopener">github</a></li>
      </ul>

      <div class="callout">
        <strong>⚠ Порядок запуска важен</strong>
        InjGen запускать в самом начале проверки — ДО запуска Ocean. После Ocean InjGen даёт ложное срабатывание.
      </div>

      <div class="section-title">InjGen — поиск JVMTI-инжекта</div>
      <p>JVMTI (Java Virtual Machine Tool Interface) — низкоуровневый интерфейс, позволяющий внешнему коду взаимодействовать с JVM в реальном времени. Читы используют его для инжекта кода прямо в работающий процесс Minecraft без создания видимых файлов на диске.</p>

      <p>InjGen сканирует процессы javaw.exe и обнаруживает следующие читы:</p>
      <ul class="plain-list">
        <li>Vape Lite Client</li>
        <li>Vape V4 Client</li>
        <li>DoomsDay Client</li>
        <li>Slinky Client</li>
        <li>Sunset Client</li>
        <li>Karma Client</li>
        <li>Cortex Client</li>
      </ul>
      ${localImg('image78.png', 'Скриншот 2 — Injgen.')}
      ${localImg('image47.png', 'Скриншот 3 — Пример софта.')}

      <p><strong>Протестирован на:</strong> Lunar Client (все версии), Feather Client (все версии), Minecraft Vanilla 1.7.10–1.21.4, LabyMod.</p>

      <div class="section-title">BamParser — анализ истории BAM</div>
      
      <p>BAM — служба Windows, которая в реестре ведёт лог всех запускавшихся .exe. Данные сохраняются даже после удаления файлов. BamParser извлекает эти данные.</p>
      
      <p><strong>Порядок работы:</strong> открываем у игрока от администратора, ждём полной загрузки всех процессов. Нажимаем галочку <strong>Not Signed Only</strong> — фильтруем только неподписанные файлы.</p>
      
      <ul class="plain-list">
      <li>Название чита = <strong>бан</strong>.</li>
      <li>Файл переименован (.exe → .rar, .zip, .png и т.д.) — находим в Everything, переименовываем обратно в .exe, запускаем. Открылся лоудер = <strong>бан</strong>.</li>
      <li>Файл помечен как удалённый (deleted) — открываем Journal Trace, ищем факт удаления. Удаление после начала проверки или после запуска Minecraft = <strong>бан</strong>. Также смотрим переименование файла перед удалением (например .exe → .txt → удалён).</li>
      <li>Файл можно найти в Browser Download View — скачан с сайта cortex, nemezida, vape или другого чит-сайта = <strong>бан</strong>.</li>
      </ul>
      ${localImg('image25.png', 'Скриншот 1 — внешний вид BamParser. Видны все .exe которые запускались на компьютере через службу BAM.')}
    `,
    callout: null,
    calloutLink: null,
    steps: [
      "Запустить InjGen в самом начале (до Ocean).",
      "Открыть BamParser у игрока от администратора.",
      "Дождаться полной загрузки всех процессов.",
      "Включить Not Signed Only — просмотреть все .exe.",
      "Переименованные файлы — найти в Everything, переименовать в .exe, запустить.",
      "Deleted-файлы — искать в Journal Trace.",
      "Подозрительные загрузки — проверить в Browser Download View.",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 04  BROWSER DOWNLOAD VIEW
  // ══════════════════════════════════════════════════════════
  {
    title: "Browser Download View",
    tag: "История загрузок",
    intro: "BrowserDownloadsView собирает историю загрузок из всех установленных браузеров (Chrome, Firefox, Edge, Opera, Brave). Незаменима когда игрок удалил скачанный чит, но не очистил историю браузера.",
    content: `
    
    <p>Сортируем по колонке <strong>End Time</strong> (дата завершения загрузки) — самые свежие сверху. Просматриваем все загрузки за последние <strong>14 дней</strong>.</p>
    
    <ul class="plain-list">
    <li>.jar или .exe скачан с сайта чита (cortex, nemezida, vape.gg, liquidbounce.net и т.п.) = <strong>бан</strong>.</li>
    <li>Скачан с Discord или Telegram — находим файл и проверяем его через Everything или HolyCheck.</li>
        <li>Скачан с официального сайта модов (curseforge, modrinth) — смотрим на имя файла. Запрещённое имя = <strong>бан</strong>.</li>
      </ul>
      ${localImg('image94.png', 'Скриншот 1 — внешний вид BrowserDownloadsView. Видна история всех загрузок из всех браузеров с URL источника, именем файла, датой и браузером.')}
      
      <div class="callout">
        <strong>Важно</strong>
        Смотрим именно на имя файла, а не только на сайт-источник. Один и тот же чит можно скачать с любого ресурса.
      </div>
    `,
    callout: null,
    calloutLink: null,
    steps: [
      "Запустить BrowserDownloadsView.",
      "Сортировать по End Time — свежие загрузки сверху.",
      "Проверить все загрузки за последние 14 дней.",
      "Чит-сайт = бан; Discord/Telegram = проверить файл.",
      "Подозрительные файлы — проверить через Everything и HolyCheck.",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 05  LASTACTIVITYVIEW
  // ══════════════════════════════════════════════════════════
  {
    title: "LastActivityView",
    tag: "Активность системы",
    intro: "LastActivityView строит хронологическую картину активности пользователя из журналов событий, реестра и метаданных файлов. Запускать нужно в самом начале проверки.",
    content: `
    
    <p><strong>Первым делом</strong> запускаем программу. Затем нажимаем <code>Ctrl+F</code> и вводим <strong>javaw</strong> — находим момент запуска Minecraft. Листаем вверх от найденной записи и смотрим, что делал игрок непосредственно перед этим и до начала проверки.</p>
    
    ${localImg('image104.png', 'Скриншот 1 — внешний вид LastActivityView. Хронология активности пользователя — запуск программ, открытие файлов, системные события.')}
      <p><strong>Основания для бана:</strong></p>
      <ul class="plain-list">
        <li>Перед проверкой запускались ShellBag, .bat или .cmd файлы — вероятно клинер.</li>
        <li>Программа выглядит аномально чистой — почти нет активности. Признак намеренной чистки.</li>
      </ul>

      <p><strong>Проверка .bat файлов.</strong> Если в активности есть запуск .bat — переходим по его пути, открываем блокнотом. Если внутри обнаружим строку ниже — это скрипт удаления Journal Trace = <strong>бан на 14 дней</strong>:</p>
      ${codeBlock(`powershell -Command "Start-Process cmd -ArgumentList '/c fsutil usn deletejournal /D /C:' -Verb RunAs"`)}
      <p>Данная команда удаляет USN-журнал файловой системы — именно тот, который анализирует Journal Trace.</p>
    `,
    callout: null,
    calloutLink: null,
    steps: [
      "Запустить LastActivityView сразу при начале проверки.",
      "Ctrl+F → javaw — найти момент запуска Minecraft.",
      "Листать вверх — смотреть что делалось до проверки.",
      "Подозрительные .bat — открыть блокнотом, проверить содержимое.",
      "Команда чистки Journal Trace в .bat = бан на 14 дней.",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 06  OCEAN / CLI OCEAN
  // ══════════════════════════════════════════════════════════
  {
    title: "Ocean / CLI Ocean",
    tag: "Античит",
    intro: "Ocean — основной инструмент глубокого анализа системы игрока от команды anticheat.ac. Модератор видит результаты в веб-панели, на компьютере игрока запускается агент OceanCLI.",
    content: `
    ${localImg('image87.png', 'Скриншот 1 — панель модератора anticheat.ac/dashboard. Здесь создаём сессию проверки и получаем Pin-код для игрока.')}
    ${localImg('image11.png', 'Скриншот 2 — внешний вид.')}
      ${localImg('image98.png', 'Скриншот 3 — Внешний вид.')}
      
      <div class="section-title">Если у игрока не загружается сайт</div>
      <ul class="plain-list">
      <li>Попробовать другой браузер.</li>
        <li>Скачать и запустить zapret (инструмент обхода блокировок для Discord/YouTube — помогает и с anticheat.ac).</li>
      </ul>
      ${localImg('image116.png', 'Скриншот 4 — Пример сыллки на сайт.')}

      <div class="section-title">Запуск OceanCLI у игрока</div>
      <ul class="plain-list">
      <li>Создать папку на рабочем столе (Ocean / 123).</li>
      <li>Переместить туда OceanCLI.exe.</li> 
      ${localImg('image40.png', 'Скриншот 5 — Создание папки.')}
      <li>Скопировать путь к папке .</li>
      ${localImg('image74.png', 'Скриншот 6 — Копирование пути.')}
        <li>Открыть CMD: <code>Win+R → cmd → Enter</code>.</li>
        <li>Ввести: <code>cd [путь к папке]</code> → Enter.</li>
        <li>Ввести: <code>OceanCLI.exe [Pin-код с сайта]</code> → Enter.</li>
        <li>Ждать 1–7 минут. Результат появится в панели модератора.</li>
      </ul>

      ${localImg('image26.png', 'Скриншот 7 — Панель модератора.')}
      ${localImg('image75.png', 'Скриншот 8 Панель модератора.')}

      <div class="section-title">Критерии бана по результатам Ocean</div>
      <ul class="plain-list">
        <li><strong>Generic Jvmti injection (Type A)</strong> — активный JVMTI-инжект. Бан.</li>
        <li><strong>Generic Injection (Type A)</strong> — активный инжект. Бан.</li>
        <li><strong>Название чита</strong> — бан, но с уточнением. Cortex, Nursultan, Prestige могут срабатывать ложно если чит удалён более года назад — Ocean всё равно находит остаточные следы. Требует дополнительного расследования.</li>
        <li><strong>Generic Cheat (A)</strong> — признаки чита. Бан.</li>
        <li>Другие странные срабатывания — уточни у Остальных кто шарит</li>
      </ul>
      
    `,
    callout: null,
    calloutLink: null,
    steps: [
      "Открыть anticheat.ac/dashboard (модератор).",
      "Скачать игроку OceanCLI.exe.",
      "Если сайт не грузится — другой браузер или zapret.",
      "Создать папку → OceanCLI → CMD → cd путь → OceanCLI.exe Pin-код.",
      "Ждать 1–7 минут.",
      "Оценить результат по критериям бана.",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 07  SHELLBAG
  // ══════════════════════════════════════════════════════════
  {
    title: "ShellBag",
    tag: "История проводника",
    intro: "ShellBag — данные реестра Windows с историей папок, которые пользователь открывал в Проводнике. Ключевая особенность: данные сохраняются даже после удаления самих папок.",
    content: `
      ${localImg('image12.png', 'Скриншот 1 — внешний вид ShellBag Analyzer. Список всех папок которые когда-либо открывались в Проводнике.')}

      <p>Сортируем по дате модификации. Ищем запрещённые имена папок за последние 14 дней: имена чит-клиентов, инжекторов, нестандартные пути (AppData, Temp, USB-флешки).</p>
      ${localImg('image89.png', 'Скриншот 2 — сортировка ShellBag по дате модификации. Самые свежие папки сверху. Ищем запрещённые имена.')}
      ${localImg('image107.png', 'Скриншот 3 — пример подозрительной папки в ShellBag. Имя совпадает с названием чита, дата менее 14 дней = бан.')}

      <div class="section-title">Если в ShellBag нет данных за 14 дней</div>
      <p>Полное отсутствие данных — подозрительно. Проверяем дату установки Windows:</p>
      <ul class="plain-list">
        <li><code>Win+R → cmd → Enter</code></li>
        <li>Вводим <code>systeminfo</code> → Enter.</li>
        <li>Находим строку <strong>"Дата загрузки системы"</strong> или <strong>"Original Install Date"</strong>.</li>
        <li>Дата установки менее 14 дней назад = переустановка Windows с целью скрыть следы = <strong>бан</strong>.</li>
      </ul>
      ${localImg('image108.png', 'Скриншот 4 — команда systeminfo в CMD. Запускаем чтобы проверить дату установки Windows.')}
      ${localImg('image80.png', 'Скриншот 5 — результат systeminfo. Строка "Дата загрузки системы" — если менее 14 дней назад = бан за переустановку ОС.')}
    `,
    callout: null,
    calloutLink: null,
    steps: [
      "Запустить ShellBag Analyzer.",
      "Сортировать по дате модификации.",
      "Искать запрещённые имена за последние 14 дней.",
      "Нет данных за 14 дней → cmd → systeminfo → дата установки Windows.",
      "Установка менее 14 дней назад = бан.",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 08  RECENTFILEVIEW
  // ══════════════════════════════════════════════════════════
  {
    title: "RecentFileView",
    tag: "Последние файлы",
    intro: "Показывает файлы которые недавно открывались на компьютере. Данные из MRU-списков реестра, папки Recent, Jump Lists. Особенно полезна когда файл уже удалён, но след остался.",
    content: `
    
    <ul class="plain-list">
    <li>Сортируем по колонке <strong>Execute Time</strong>.</li>
    <li>Просматриваем все .exe и .jar за последние 14 дней.</li>
    <li>Кликаем по каждому подозрительному файлу — если существует, открываем двойным кликом.</li>
    <li>Открылся лоудер или DoomsDay = <strong>бан</strong>.</li>
    <li>Файл уже удалён — переходим в Journal Trace, ищем по имени и дате.</li>
    </ul>
    ${localImg('image7.png', 'Скриншот 1 — внешний вид RecentFileView. Список файлов которые были открыты на компьютере с временем последнего запуска.')}

      <p>Особое внимание: файлы из нестандартных путей (Temp, AppData/Roaming), файлы со случайными именами, файлы которые запускались во время игровой сессии.</p>
    `,
    callout: null,
    calloutLink: null,
    steps: [
      "Запустить RecentFileView.",
      "Сортировать по Execute Time.",
      "Просмотреть каждый .exe и .jar за 14 дней.",
      "Открыть подозрительные — лоудер = бан.",
      "Удалённые файлы — Journal Trace.",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 09  EXECUTEDPROGRAMSLIST
  // ══════════════════════════════════════════════════════════
  {
    title: "ExecutedProgramsList",
    tag: "Запущенные программы",
    intro: "Собирает данные о запускавшихся программах из Windows Prefetch, UserAssist реестра, AppCompatCache. Более широкая картина чем BamParser — включает программы которых нет в BAM.",
    content: `
    
    <p>Запускаем, дважды кликаем по заголовку <strong>Last Executed On</strong> — сортировка по дате (свежие сверху).</p>
    ${localImg('image61.png', 'Скриншот 1 — внешний вид ExecutedProgramsList. Видны все программы которые запускались на компьютере с датой последнего запуска.')}
    
    <ul class="plain-list">
    <li><code>Ctrl+F</code> — ищем по именам читов.</li>
    <li>Поиск по <code>downloads</code> — запуски из папки Загрузки.</li>
    <li>Поиск по <code>Desktop</code> или <code>Рабочий стол</code> — аналогично.</li>
    ${localImg('image85.png', 'Скриншот 2 — сортировка по дате последнего запуска. Двойной клик по заголовку колонки.')}
    <li>Колонки <strong>Product Name</strong> и <strong>Company Name</strong> — у легитимных программ заполнены. Если пустые у недавнего файла — подозрительно, стоит найти и проверить.</li>
    </ul>
    ${localImg('image42.png', 'Скриншот 3 — пример файла с пустыми Product Name и Company Name. Подозрительно для недавно запущенного файла — ищем в Everything.')}
    `,
    callout: null,
    calloutLink: null,
    steps: [
      "Запустить ExecutedProgramsList.",
      "Двойной клик по Last Executed On — сортировка по дате.",
      "Ctrl+F — поиск по именам читов.",
      "Поиск по 'downloads' и 'Desktop'.",
      "Пустые Product/Company Name у свежего файла — проверить.",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 10  USBDEVIEW + SYSTEM INFORMER DISK DEVICES
  // ══════════════════════════════════════════════════════════
  {
    title: "UsbDeview + Disk Devices",
    tag: "USB-устройства",
    intro: "UsbDeview показывает историю всех USB-устройств подключавшихся к компьютеру. System Informer в режиме Disk Devices — точное время последнего подключения и отключения каждой флешки.",
    content: `
      <ul class="link-list">
        <li><span>UsbDeview</span><a href="https://www.nirsoft.net/utils/usb_devices_view.html" target="_blank" rel="noopener">скачать</a></li>
        <li><span>UsbDriveLog</span><a href="https://www.nirsoft.net/utils/usbdrivelog.zip" target="_blank" rel="noopener">скачать</a></li>
        <li><span>System Informer</span><a href="https://systeminformer.com/downloads.php" target="_blank" rel="noopener">скачать</a></li>
      </ul>

      <div class="section-title">UsbDeview</div>
      
      <ul class="plain-list">
      <li>Запускаем, сортируем по колонке <strong>Registry Time 1</strong>.</li>
      <li>Смотрим дату последнего подключения каждого устройства.</li>
      <li>Флешка подключалась после начала проверки = <strong>бан</strong>.</li>
      </ul>
      ${localImg('image67.png', 'Скриншот 1 — внешний вид UsbDeview. История всех USB-устройств когда-либо подключавшихся к компьютеру.')}

      <div class="section-title">System Informer — Disk Devices</div>
      
      <ul class="plain-list">
      <li>Запускаем System Informer → System → Options → <strong>Disk Devices</strong>.</li>
      <li>Кликаем на каждую флешку → вкладка <strong>Сведения</strong> → стрелочка справа от "Описание устройства".</li>
      <li>Ищем строку <strong>"Дата последнего удаления"</strong> — время физического отключения устройства.</li>
      <li>Время после начала проверки или за 1–2 минуты до начала = <strong>бан</strong>.</li>
      </ul>
      ${localImg('image114.png', 'Скриншот 2 — System Informer, вкладка Disk Devices. Здесь видны все подключённые и ранее подключавшиеся дисковые устройства.')}
    `,
    callout: null,
    calloutLink: null,
    steps: [
      "UsbDeview → сортировать по Registry Time 1.",
      "Флешка подключалась после начала проверки = бан.",
      "System Informer → System → Options → Disk Devices.",
      "Кликнуть на каждую флешку → Сведения → Дата последнего удаления.",
      "Время после или за 1–2 мин до начала = бан.",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 11  RECAF + HOLYCHECK + НЕЙРОСЕТЬ
  // ══════════════════════════════════════════════════════════
  {
    title: "Recaf + HolyCheck + ИИ",
    tag: "Анализ .jar файлов",
    intro: "HolyCheck — онлайн-платформа для быстрой проверки модов. Recaf — Java-декомпилятор для изучения байткода. В паре с нейросетью (DeepSeek) позволяют найти запрещённый функционал даже в обфусцированных и неизвестных модах.",
    content: `
    <ul class="link-list">
    <li><span>Recaf</span><a href="https://sourceforge.net/projects/recaf.mirror/files/latest/download" target="_blank" rel="noopener">скачать</a></li>
        <li><span>HolyCheck — проверка модов</span><a href="https://mods.holyworld.me/mods/check" target="_blank" rel="noopener">открыть</a></li>
        <li><span>anticheat.ac/strings — база строк читов</span><a href="https://anticheat.ac/strings/" target="_blank" rel="noopener">открыть</a></li>
        <li><span>DeepSeek — нейросеть для анализа кода</span><a href="https://chat.deepseek.com/" target="_blank" rel="noopener">открыть</a></li>
        </ul>
        
        <div class="section-title">Алгоритм проверки модов</div>
        ${localImg('image77.png', 'Скриншот 1 — HolyCheck, вкладка проверки модов. Перетаскиваем все .jar файлы игрока в это поле.')}
        ${localImg('image14.png', 'Скриншот 2 — ')}
        ${localImg('image79.png', 'Скриншот 3 — .')}
        
      <ul class="plain-list">
      <li><strong>Шаг 1.</strong> Скидываем все моды на HolyCheck. Результат "чит" = баним. Исключение: некоторые моды запрещены на HolyWorld, но разрешены у нас (crystal optimizer, target hud). В таком случае скачиваем мод с официального сайта и сравниваем вес. Совпадает = пропускаем.</li>
      ${localImg('image50.png', 'Скриншот 4 — Пример чита')}
        <li><strong>Шаг 2.</strong> Файл "чистый" = пропускаем. Файл "неизвестный" или "спам" (например keystrokes от LabyMod) = идём дальше.</li>
        ${localImg('image84.png', 'Скриншот 6 — ')}
        <li><strong>Шаг 3.</strong> Загружаем неизвестный файл на <a href="https://anticheat.ac/strings/" target="_blank">anticheat.ac/strings/</a>. Нашло совпадения = бан.</li>
        <li><strong>Шаг 4.</strong> Ничего не нашло = открываем в Recaf. Ищем запрещённые строки: hitboxlimit, reach, size 0.5, bind (E). Мод обфусцирован (нечитаемый набор символов: jjjjjjaauiuqk) = бан (обфусцированные моды запрещены).</li>
        <li><strong>Шаг 5.</strong> Копируем классы (особенно mixin) в DeepSeek с вопросом: "есть ли здесь запрещённый функционал для Minecraft?" Нейросеть подробно разберёт код.</li>
      </ul>


      <div class="section-title">Что искать в Recaf — по типу лоудера</div>

      <p><strong>Fabric моды:</strong></p>
      <ul class="plain-list">
        <li><code>method_5857</code> — это setBoundingBox (изменение хитбокса игрока)</li>
        <li><code>class_239</code> — это HitResult (обработка попаданий, autoattack)</li>
        <li><code>class_1799</code> — это ItemStack (свапп предметов)</li>
      </ul>

      <p><strong>Forge моды:</strong></p>
      <ul class="plain-list">
        <li><code>func_174826_a</code> — это setBoundingBox</li>
        <li><code>RayTraceResult</code>, <code>EntityRayTraceResult</code> — autoattack</li>
        <li><code>ItemStack</code> — свапп</li>
      </ul>
      
      <p><strong>LabyMod 3 моды:</strong></p>
      <ul class="plain-list">
        <li>Метод <code>a</code> в классе <code>dci</code> = setBoundingBox / AxisAlignedBB</li>
        <li>Классы <code>dcl</code> и <code>dck</code> = RayTraceResult и EntityRayTraceResult</li>
        <li>Класс <code>bmb</code> = ItemStack</li>
      </ul>

      <div class="section-title">Очевидные читы</div>
      <p>Классы с именами <code>KillAura</code>, <code>AutoAttack</code>, <code>Freecam</code>, <code>Aimbot</code> и т.д. — баним сразу без дополнительного анализа.</p>

      <div class="section-title">XRay с изменённым названием</div>
      <p>Открываем архив ресурспака → <strong>assets → minecraft → models → block</strong>. Видим файлы с именем XRay = <strong>бан</strong>. В .json файлах ищем строку <code>"Copyright 2018 Filmjolk David Grindholmen"</code> — сигнатура известного XRay пака.</p>

      <div class="section-title">Анализ через нейросеть</div>
      <ul class="plain-list">
      <li><strong>.jar файлы:</strong> открываем в Recaf, копируем mixin-классы → вставляем в DeepSeek с вопросом "есть ли запрещённый функционал для Minecraft?"</li>
      <li><strong>.dll файлы:</strong> открываем в блокноте, копируем 30–50% кода → вставляем в DeepSeek с тем же вопросом.</li>
      </ul>
      ${localImg('image86.png', 'Скриншот 5 — .')}
      ${localImg('image99.png', 'Скриншот 7 — .')}
      
      <p>Совет: всегда копировать все классы и строки и вставлять в нейросеть — она подробно распишет что нашла.</p>
      `,
    callout: null,
    calloutLink: null,
    steps: [
      "Скинуть все моды на HolyCheck.",
      "Неизвестные → anticheat.ac/strings.",
      "Ничего нет → открыть в Recaf.",
      "Искать: setBoundingBox, HitResult, обфускацию, KillAura.",
      "Скопировать mixin-классы в DeepSeek для анализа.",
      "XRay пак → assets/minecraft/models/block.",
      ".dll файлы → блокнот → 30-50% кода → DeepSeek.",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 12  JOURNAL TRACE
  // ══════════════════════════════════════════════════════════
  {
    title: "Journal Trace",
    tag: "Журнал ФС",
    intro: "Journal Trace анализирует USN Journal — низкоуровневый журнал файловой системы NTFS, фиксирующий абсолютно все операции с файлами: создание, изменение, переименование, удаление. Невозможно очистить без специальных прав и команд.",
    content: `
      ${localImg('image37.png', 'Скриншот 1 — внешний вид Journal Trace. Здесь выбираем диск для сканирования.')}

      <div class="callout">
        <strong>Критично</strong>
        Journal Trace обязательно должен лежать на ТОМ ЖЕ диске, который сканирует. Minecraft на диске C — Journal Trace тоже на C.
      </div>

      <p><strong>Запуск:</strong> открываем → drive → выбираем диск C или D (смотря где Minecraft) → Select → Scan → Layout → Data Grid.</p>

      <div class="section-title">Строка 1 — Все операции в папке игрока</div>
      <p>Подставляем реальный путь к папке .minecraft (например: <code>C:\Users\Username\AppData\Roaming\.minecraft</code>).</p>
      ${codeBlock(`directory:путь_к_папке;name:!!.`)}
      ${localImg('image19.png', 'Скриншот 2 — результат строки 1 в Journal Trace. Видны все операции с файлами в папке .minecraft. Сортируем по Date.')}
      <p>Сортируем по Date. Удаление файлов после начала проверки = <strong>бан</strong>.</p>

      <div class="section-title">Строка 2 — config, mods, logs, addons</div>
      ${codeBlock(`directory:путь_к_папке;directory:config||mods||logs||addons`)}
      ${localImg('image34.png', 'Скриншот 3 — результат строки 2. Видны операции в папках config/mods/logs. Ищем ручную чистку логов или запрещённые имена модов.')}
      <ul class="plain-list">
        <li>Логи могут самоудаляться и перезаписываться — это нормально.</li>
        <li>Если логи были вручную очищены (удалён весь контент папки logs разом) = <strong>бан</strong>.</li>
        <li>Запрещённые имена файлов в mods или config = <strong>бан</strong>.</li>
      </ul>

      <div class="section-title">Строка 3 — .jar, .zip, .rar на всех дисках</div>
      <p>Вставляем отдельно для каждого диска (C, D и т.д.). Journal Trace должен лежать на соответствующем диске.</p>
      ${codeBlock(`directory::;name:.jar||.zip||.rar;name:!!.lnk`)}
      ${localImg('image46.png', 'Скриншот 4 — поиск jar/zip/rar файлов в Journal Trace. Видны все операции с архивами и jar-файлами.')}
      <ul class="plain-list">
        <li>Удаление после начала проверки = <strong>бан</strong>.</li>
        <li>Запрещённые имена в любых операциях = <strong>бан</strong>.</li>
      </ul>

      <div class="section-title">Строка 4 — Загрузки и Рабочий стол</div>
      ${codeBlock(`directory:Downloads||Desktop`)}
      ${localImg('image8.png', 'Скриншот 5 — результат строки 4. Видны операции с файлами в папках Downloads и Desktop.')}
      ${localImg('image101.png', 'Скриншот 6 — пример удаления файла из загрузок после начала проверки = бан.')}
      ${localImg('image83.png', 'Скриншот 7 — пример файла с запрещённым именем в Journal Trace = бан.')}
      ${localImg('image29.png', 'Скриншот 8 — итоговый вид Journal Trace с несколькими уликами одновременно.')}
      <ul class="plain-list">
        <li>Удаление после начала проверки = <strong>бан</strong>.</li>
        <li>Запрещённые имена = <strong>бан</strong>.</li>
      </ul>
    `,
    callout: null,
    calloutLink: null,
    steps: [
      "Положить Journal Trace на ТОТ ЖЕ диск что и Minecraft.",
      "drive → нужный диск → Select → Scan → Layout → Data Grid.",
      "Строка 1 — все операции в папке игрока, сортировать по Date.",
      "Строка 2 — config/mods/logs/addons.",
      "Строка 3 — .jar/.zip/.rar на каждом диске отдельно.",
      "Строка 4 — Downloads/Desktop.",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 13  SIMPLE UNLOCKER
  // ══════════════════════════════════════════════════════════
  {
    title: "Simple Unlocker",
    tag: "Файловые блокировки",
    intro: "Simple Unlocker обнаруживает и снимает блокировки с файлов, которые удерживаются активными процессами Windows. Инжект-читы часто держат свои dll-файлы заблокированными.",
    content: `
      ${localImg('image44.png', 'Скриншот 1 — внешний вид Simple Unlocker. Здесь видны заблокированные файлы и процессы которые их удерживают.')}

      <ul class="plain-list">
        <li>Скачиваем и запускаем у игрока от имени администратора.</li>
        <li>Нажимаем <strong>Разблокировка ограничений → Начать сканирование</strong>.</li>
        <li>Видим дебаггерные ограничения — находим файл в Everything (чтобы знать путь), снимаем ограничение.</li>
        <li>Открываем файл двойным кликом. Открылся лоадер чита или клинер = <strong>бан</strong>.</li>
        <li>Файл не открывается даже после разблокировки — закидываем на <a href="https://anticheat.ac/strings/" target="_blank">anticheat.ac/strings/</a>.</li>
      </ul>
    `,
    callout: null,
    calloutLink: null,
    steps: [
      "Скачать Simple Unlocker игроку, запустить от администратора.",
      "Разблокировка ограничений → Начать сканирование.",
      "Найти подозрительный файл в Everything.",
      "Снять ограничение через Simple Unlocker.",
      "Открыть файл — лоудер = бан.",
      "Не открывается → anticheat.ac/strings.",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 14  EVENTVWR
  // ══════════════════════════════════════════════════════════
  {
    title: "Eventvwr",
    tag: "Журнал событий",
    intro: "Eventvwr — встроенный просмотрщик событий Windows. Используется как вспомогательный инструмент для поиска логов удаления .exe файлов.",
    content: `
      <p><strong>Запуск:</strong> <code>Win+R → eventvwr → Enter</code>.</p>

      ${localImg('image60.png', 'Скриншот 1 — Eventvwr, журнал событий Windows. Здесь ищем записи с процессом fsutil.exe.')}

      <p>Если в журнале есть записи с процессом <code>fsutil.exe</code> — это логи связанные с удалением .exe файлов. По ним можно ориентироваться что именно было удалено.</p>

      ${localImg('image76.png', 'Скриншот 2 — поиск записей fsutil.exe в Eventvwr.')}
      ${localImg('image4.png', 'Скриншот 3 — пример записи связанной с удалением .exe файла.')}
      ${localImg('image106.png', 'Скриншот 4 — детали записи: путь к удалённому файлу.')}

      <div class="callout">
        <strong>Важно</strong>
        Дата в этих записях может быть некорректной — на 10 дней меньше реальной. Наличие записей fsutil.exe абсолютно нормально для любого компьютера. Только за это нельзя банить — используйте как вспомогательную подсказку для Journal Trace.
      </div>
    `,
    callout: null,
    calloutLink: null,
    steps: [
      "Win+R → eventvwr → Enter.",
      "Искать записи с процессом fsutil.exe.",
      "Использовать как вспомогательную информацию.",
      "Найденные пути к удалённым файлам — искать в Journal Trace.",
      "Только за это не банить.",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 15  REGSCANNER
  // ══════════════════════════════════════════════════════════
  {
    title: "RegScanner",
    tag: "Реестр Windows",
    intro: "RegScanner — быстрый поиск по реестру Windows. Используется для обнаружения следов открытия .dll файлов через системный диалог — что может указывать на инжект.",
    content: `
      ${localImg('image90.png', 'Скриншот 1 — настройки запуска RegScanner. Запускаем и ждём загрузки всего реестра.')}

      <p>После загрузки реестра ищем только две конкретные записи:</p>

      <p><strong>Запись 1:</strong></p>
      <ul class="plain-list">
        <li>Registry Key: <code>Software\Microsoft\Windows\CurrentVersion\Explorer\RecentDocs\.dll</code></li>
        <li>Name: <code>MRUListEx</code></li>
        <li>Key Modified Time: дата менее 14 дней</li>
      </ul>

      <p><strong>Запись 2:</strong></p>
      <ul class="plain-list">
        <li>Registry Key: <code>Software\Microsoft\Windows\CurrentVersion\Explorer\ComDlg32\OpenSavePidlMRU\.dll</code></li>
        <li>Name: <code>MRUListEx</code></li>
        <li>Key Modified Time: дата менее 14 дней</li>
      </ul>

      ${localImg('image55.png', 'Скриншот 2 — найденная подозрительная запись .dll в реестре. Видна дата изменения — менее 14 дней назад.')}

      <p><strong>Нашли — что делаем:</strong></p>
      <ul class="plain-list">
        <li>Открываем LastActivityView, смотрим действия игрока в это время.</li>
        <li>Незадолго до этой даты запускался инжектор (System Informer, Process Hacker 2, Extreme Injector) = <strong>бан</strong>.</li>
        <li>Инжектор не запускался или дата старше 14 дней — скачиваем найденный .dll на свой ПК, проверяем через <a href="https://anticheat.ac/strings/" target="_blank">anticheat.ac/strings/</a>.</li>
        <li>В причине бана: <strong>"инжект dll"</strong> или <strong>"запрет dll"</strong>.</li>
      </ul>
    `,
    callout: null,
    calloutLink: null,
    steps: [
      "Запустить RegScanner, дождаться загрузки реестра.",
      "Найти запись RecentDocs\\.dll с MRUListEx за 14 дней.",
      "Найти запись ComDlg32\\OpenSavePidlMRU\\.dll с MRUListEx за 14 дней.",
      "LastActivityView — был ли запущен инжектор в это время?",
      "Инжектор + дата = бан. Нет — проверить dll на strings.",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 16  POWERSHELL
  // ══════════════════════════════════════════════════════════
  {
    title: "PowerShell",
    tag: "Скрипты",
    intro: "PowerShell используется для запуска чекера, проверки системных служб, просмотра истории команд и проверки доступности античит-сайтов.",
    content: `
      ${localImg('image64.png', 'Скриншот 1 — PowerShell запущен от имени администратора. Запускаем строго от администратора.')}

      <div class="section-title">Проверка системных служб</div>
      <p>После запуска чекера смотрим на состояние критических служб. Некоторые читы и клинеры отключают их для затруднения обнаружения:</p>
      <ul class="plain-list">
        <li><strong>Sysmain</strong> выключена = <strong>бан на 7 дней</strong>.</li>
        <li><strong>EventLog</strong> выключена = <strong>бан на 7 дней</strong>.</li>
        <li><strong>Dcomlaunch</strong> выключена = <strong>бан на 7 дней</strong>.</li>
        <li>Чистка Journal Trace (fsutil.exe в чекере) = <strong>бан на 14 дней</strong>.</li>
      </ul>
      ${localImg('image53.png', 'Скриншот 2 — результат чекера PowerShell. Видны статусы критических служб.')}

      <div class="section-title">История команд PowerShell</div>
      <ul class="plain-list">
        <li><code>Win+R → shell:recent → Enter</code></li>
        <li>Переходим: папка <strong>windows → powershell → PSReadLine</strong></li>
        <li>Открываем .txt файл — это история всех введённых команд PowerShell.</li>
        <li>Ищем подозрительные команды: удаление журналов, скачивание файлов, работа с реестром.</li>
      </ul>
      ${localImg('image92.png', 'Скриншот 3 — папка PSReadLine с историей команд PowerShell. Открываем .txt файл и проверяем содержимое.')}

      <div class="section-title">Проверка доступности сайтов</div>
      <p>Некоторые читы блокируют античит-сайты через hosts файл, DNS или фаервол. Скрипт проверяет все способы блокировки одновременно.</p>
      ${codeBlock(`$sites="fluddy.com","anticheat.ac","mods.holyworld.me","github.com","voidtools.com","privazer.com","nirsoft.net","sourceforge.net","download.ericzimmermanstools.com","win-rar.com","simpleunlocker.ds1nc.ru"; function Test-Site($u){ $r=@(); if(Select-String -Path "$env:SystemRoot\\System32\\drivers\\etc\\hosts" -Pattern "(?mi)^\\s*?\\d.+?$($u.Replace('.','\\.'))\\s*$"){$r+="HOSTS"}; try{if((Resolve-DnsName $u -ErrorAction Stop -Type A|% IPAddress)-like'127.*'){$r+="DNS_LOOPBACK"}}catch{}; $regPath="HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings\\ZoneMap\\Domains\\$($u.Replace('.','\\'))";if(Test-Path $regPath){$r+="REGISTRY_ZONE"}; if(Get-NetFirewallRule|?{$_.DisplayName-like"*$u*"-and$_.Action-eq"Block"}){$r+="FIREWALL"}; try{iwr "https://$u"-TimeoutSec 5 -UseBasicParsing -DisableKeepAlive -ErrorAction Stop|Out-Null}catch{if($_.Exception.Response.StatusCode-eq407){$r+="PROXY_BLOCK"}elseif(-not$_.Exception.Response){try{iwr "http://$u"-TimeoutSec 3 -UseBasicParsing -DisableKeepAlive -ErrorAction Stop|Out-Null}catch{$r+="WEB_BLOCKED"}}}; if($r.Count-gt0){"$u → БЛОКИРОВКА: $($r-join', ')"}else{"$u → OK"}}; $sites|%{Test-Site $_}`)}
      ${localImg('image31.png', 'Скриншот 4 — результат проверки доступности сайтов. Видно какие сайты заблокированы и каким способом.')}
    `,
    callout: null,
    calloutLink: null,
    steps: [
      "PowerShell от имени администратора.",
      "Запустить чекер — проверить Sysmain/EventLog/Dcomlaunch.",
      "Win+R → shell:recent → windows → powershell → PSReadLine → .txt.",
      "Вставить скрипт проверки доступности сайтов.",
      "Выключенные службы = бан 7 дней. Чистка JT = бан 14 дней.",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 17  SYSTEM INFORMER
  // ══════════════════════════════════════════════════════════
  {
    title: "System Informer",
    tag: "Анализ процессов",
    intro: "System Informer (бывший Process Hacker) — продвинутый диспетчер задач с доступом к памяти процессов, выгруженным модулям, сетевым соединениям. Ключевой инструмент для обнаружения активных инжект-читов.",
    content: `
      ${localImg('image103.png', 'Скриншот 1 — главное окно System Informer. Видны все запущенные процессы с детальной информацией.')}

      <div class="section-title">Начальная настройка</div>
      <ul class="plain-list">
        <li>System → Options → General → <strong>Enable kernel-mode driver</strong> → галочка → согласиться с перезагрузкой System Informer.</li>
        <li>Вылезла ошибка = игнорируем, kernel mode всё равно включился.</li>
      </ul>
      ${localImg('image72.png', 'Скриншот 2 — включение kernel-mode driver в настройках. Это даёт доступ к более глубокому анализу системы.')}

      <div class="section-title">Network — сетевые соединения</div>
      <ul class="plain-list">
        <li><code>Ctrl+K</code> → вводим <code>javaw.exe</code> → вкладка <strong>Network</strong>.</li>
        <li>Remote Address <strong>192.168.x.x</strong> = <strong>бан</strong> (признак локального прокси-чита).</li>
      </ul>
      ${localImg('image66.png', 'Скриншот 3 — javaw.exe, вкладка Network. Смотрим Remote Address. 192.168.x.x = бан.')}

      <div class="section-title">Unloaded Modules — выгруженные dll</div>
      <p>ПКМ по javaw.exe → Miscellaneous → Unloaded Modules. Это dll которые были загружены в процесс и затем выгружены. Инжекторы оставляют следы именно здесь.</p>

      <table class="ref-table">
        <thead><tr><th>Размер в System Informer</th><th>Что это</th></tr></thead>
        <tbody>
          <tr><td>1.42 mb</td><td>Хитбоксы (проверять — может ложно срабатывать)</td></tr>
          <tr><td>1.43 mb (1525 kb)</td><td>dauntiblyat.dll / potato dll (noname)</td></tr>
          <tr><td>1.52 mb</td><td>Хитбоксы</td></tr>
          <tr><td>1.54 mb</td><td>Хитбоксы</td></tr>
          <tr><td>1.6 mb (1647 kb)</td><td>systemly dll (noname)</td></tr>
          <tr><td>2.2 mb (2221 kb)</td><td>leaf Huina</td></tr>
          <tr><td>3.7 mb (3734 kb)</td><td>pandora dll</td></tr>
          <tr><td>4.7–4.8 mb</td><td>trigger bot dll</td></tr>
          <tr><td>5.42 mb (5510 kb)</td><td>DoomsDay dll</td></tr>
          <tr><td>9.6–9.7 mb (9643 kb)</td><td>akimus dll</td></tr>
          <tr><td>11.5 mb (11492 kb)</td><td>fallen client</td></tr>
          <tr><td>27.85–27.86 mb</td><td>system dll (hitbox / noname dll)</td></tr>
          <tr><td>114 kb</td><td>blessed client.dll</td></tr>
          <tr><td>801–836 kb</td><td>drive86.dll (noname)</td></tr>
        </tbody>
      </table>

      <p>Вес показан оригинального файла. В System Informer может отличаться на 3–5% — все подозрительные dll проверяйте, не пропускайте. Видите странный вес — копируете название, ищите в Everything, копируете к себе, закидываете в <a href="https://anticheat.ac/strings/" target="_blank">anticheat.ac/strings/</a>.</p>
      ${localImg('image71.png', 'Скриншот 4 — Unloaded Modules в System Informer. Видны dll которые были загружены и выгружены из процесса javaw.exe.')}

      <div class="section-title">DPS — Memory Strings</div>
      <p>Пишем в поиск <strong>DPS</strong> → Services → ищем DPS → go to process → двойной клик. Memory → Options → убрать все галочки → Strings (значение 4, все галочки кроме extended unicode).</p>
      ${codeBlock(`^!![A-Z]((?!Exe).)*$`)}
      <p>Показывает изменённое состояние в службе DPS. Нашло .exe — ищем в Everything / Journal Trace.</p>
      ${codeBlock(`!0!`)}
      <p>Показывает недавно запущенные программы. Подозрительное имя — ищем в Everything / Journal Trace.</p>
      ${localImg('image59.png', 'Скриншот 5 — DPS, Memory → Strings. Вставляем regex-строки для поиска следов читов.')}
      ${localImg('image49.png', 'Скриншот 6 — результаты поиска в DPS. Нашло подозрительный .exe = ищем в Everything.')}

      <div class="section-title">dcomlaunch — поиск .jar</div>
      <p>Пишем в поиск <strong>dcomlaunch</strong> → Services → dcomlaunch → go to process → двойной клик → Memory → Strings (значение 4, без extended unicode) → в filter container пишем <code>-jar</code>.</p>
      ${localImg('image96.png', 'Скриншот 7 — dcomlaunch Memory Strings с фильтром -jar. Видны jar-файлы загруженные в службу.')}
      <p>Смотрим имя найденного .jar — ищем в Everything → запускаем двойным кликом → открылся чит = <strong>бан</strong>.</p>

      <div class="section-title">javaw.exe — полный regex поиск в памяти</div>
      <p>Двойной клик по javaw.exe → Memory → убрать все галочки → Strings (значение 4, все кроме extended unicode) → в поле contains (regex, case-insensitive):</p>
      ${codeBlock(`(?i)(4aNT>jeSE@I"KE\\)PQ07|prlgQZGLbPCtCOg|dreampool|TriggerBOT|forge\\.commons\\.|ZDCoder|radioegor146|chs/Main|chs/Profiller|areyoufuckingdump|vape\\.gg|www\\.vape\\.gg|VAPE4DLL|CREATED_BY_WHYMADUD|oeshb|h1tb0x|ch0ffa_box|onupdate|tickupdate|BreakHitsOn|waoHITBOXES|chs/|HRCRHIIIq|RHOOOCCC5\\.e|listSpritesure|Zero/Time|GetDiskId|afefefeffe|\\.crlc\\)|\\(ITK;J\\)V|ClickPearl|Noise\\sClient|stubborn\\.website|xameleon\\.html|x/mo/c|E\\sS\\sP|EEEFFFHHHHJJJJM|NNNNNNNNN\\{\\{\\{\\{\\{|3333NNNNgigg|kkkyik\\^\\^ZkBBB2221KKYHYeYVY|Hitbox:|Reach:|b/time|BaoBab:|magicthein|radioegor146|net\\.minecraftforge\\.ASMEventHandler\\.31\\.wait|org/springframework/boot/loader|net/lenni0451/commons/httpclient)`)}
      ${localImg('image38.png', 'Скриншот 8 — javaw.exe Memory Strings с regex. Вставляем строку и ждём результатов.')}
      ${localImg('image24.png', 'Скриншот 9 — пример срабатывания на Vape V4. Нашло характерную строку в памяти javaw.exe = бан.')}
      ${localImg('image65.png', 'Скриншот 10 — пример срабатывания на DoomsDay. Нашло специфическую строку DoomsDay Client = бан.')}
      ${localImg('image56.png', 'Скриншот 11 — пример срабатывания на Blessed Client. Характерные строки Blessed в памяти = бан.')}
      ${localImg('image100.png', 'Скриншот 12 — итоговый вид с несколькими совпадениями. Каждое совпадение = конкретный чит.')}
    `,
    callout: null,
    calloutLink: null,
    steps: [
      "Enable kernel-mode driver → перезагрузить System Informer.",
      "Ctrl+K → javaw.exe → Network → 192.168.x.x = бан.",
      "ПКМ → Unloaded Modules → веса dll по таблице.",
      "Подозрительные dll → Everything → anticheat.ac/strings.",
      "DPS: Memory → Strings → два regex запроса.",
      "dcomlaunch: Memory → Strings → filter '-jar'.",
      "javaw.exe: Memory → Strings → общий regex.",
    ],
  },


  // ══════════════════════════════════════════════════════════
  // 18  ТАБЛИЦА DLL, JAR
  // ══════════════════════════════════════════════════════════
  {
    title: "Таблица dll, jar",
    tag: "Справочник",
    intro: "Полная справочная таблица известных читов, хитбоксов и запрещённых файлов. Вес указан оригинального файла — в System Informer может отличаться на 3–5%.",
    content: `
      <table class="ref-table">
        <thead><tr><th>Файл / Чит</th><th>Вес</th><th>Метод обнаружения</th></tr></thead>
        <tbody>
          <tr><td>Vape V4</td><td>11 210 / 12 000 кб</td><td>Ocean / Appinfo / EchoScanner / Strings javaw.exe / DPS</td></tr>
          <tr><td>Vape V3</td><td>3 614 кб</td><td>Ocean / Strings javaw.exe / DPS / Pca</td></tr>
          <tr><td>Vape V2</td><td>3 678 кб</td><td>Уже не работает</td></tr>
          <tr><td>DoomsDay (dll)</td><td>5 510 кб</td><td>System Informer / Разбор .dll</td></tr>
          <tr><td>DoomsDay (jar)</td><td>29 000 – 30 000 кб</td><td>Strings PH / SS / WinRar / Ocean / dcomlaunch</td></tr>
          <tr><td>Blessed Client</td><td>6 435 – 26 435 кб</td><td>Ocean / Strings javaw.exe / CrashLog</td></tr>
          <tr><td>Blessed Crack</td><td>904 кб</td><td>zov/blessed/crack/by/laqwrt</td></tr>
          <tr><td>Drip Client</td><td>28 430 кб</td><td>Ocean / RedLotus / EchoScanner</td></tr>
          <tr><td>Dreampool</td><td>27 450 кб</td><td>Strings javaw.exe (MagicTheInjecting) — устарел</td></tr>
          <tr><td>Squad Client</td><td>~25 МБ</td><td>Strings javaw.exe / Name - Sound.mp3</td></tr>
          <tr><td>Cortex Legit 3.0 Beta</td><td>7 363 кб</td><td>.o в Temp / Stubborn.Website / Appinfo</td></tr>
          <tr><td>Cortex Legit</td><td>16–20 МБ</td><td>.o в Temp / Stubborn.Website / Appinfo</td></tr>
          <tr><td>Cortex Crack</td><td>15 251 / 17 625 кб</td><td>System Informer / Разбор .dll</td></tr>
          <tr><td>Cortezz Client</td><td>3 599 кб</td><td>client/cortezz</td></tr>
          <tr><td>Vertzah Client</td><td>1 526 кб</td><td>System Informer / Разбор .dll</td></tr>
          <tr><td>vec.dll</td><td>30 кб (и другие)</td><td>System Informer / Разбор .dll — часто встречается</td></tr>
          <tr><td>Avalone Red</td><td>824 кб / 21 764 кб</td><td>Ocean / DPS / Conhost / PcaClient</td></tr>
          <tr><td>Avalone Green</td><td>987 / 726 / 1 600 кб</td><td>Ocean / DPS / Conhost / PcaClient</td></tr>
          <tr><td>Avalone Blue</td><td>765 кб</td><td>Ocean / DPS / Conhost / PcaClient</td></tr>
          <tr><td>Virgin Client (Ghost)</td><td>1.7–1.9 МБ</td><td>net/smoothboot/client/module/combat</td></tr>
          <tr><td>ThunderHack</td><td>5 847 кб</td><td>thunder/hack</td></tr>
          <tr><td>Troxill Crack</td><td>167 кб</td><td>ru/zdcoder/troxill/modules</td></tr>
          <tr><td>Troxill Crack (dll)</td><td>1 457 кб</td><td>System Informer / Разбор .dll</td></tr>
          <tr><td>NeverHook Legit</td><td>2 486 кб</td><td>System Informer / Разбор .dll</td></tr>
          <tr><td>Undetectable</td><td>1523 / 1578 / 1590 / 1597 / 1634 / 1642 / 1707 / 1713 / 1748 / 1756 кб</td><td>System Informer / Разбор .dll</td></tr>
          <tr><td>Rockstar Legit</td><td>450 кб</td><td>DPS / EchoScanner / Ocean / Appinfo / Consent</td></tr>
          <tr><td>Laze Client</td><td>Loader 118 кб + dll 3 613 кб</td><td>Strings javaw.exe / DPS / PcaSvc</td></tr>
          <tr><td>Imperator Client</td><td>9 243 кб</td><td>Ocean / DPS / PcaClient / CrashLog / Strings javaw.exe</td></tr>
          <tr><td>Cheat by Ke3wik</td><td>8 771 кб</td><td>Ocean / DPS / PcaClient / CrashLog / Strings javaw.exe</td></tr>
          <tr><td>MP3 Dllhost (Anapa V4)</td><td>9 180 кб</td><td>CrashLog / Stubborn.Website / Appinfo</td></tr>
          <tr><td>MicoHitboxes</td><td>14 950 кб</td><td>Ocean / DPS / PcaClient / Diagtrack</td></tr>
          <tr><td>Ammit Client</td><td>17 698 кб</td><td>Ocean / Strings javaw.exe / DPS / PcaClient</td></tr>
          <tr><td>Ammit Client (Linux)</td><td>21 594 кб</td><td>Ocean / SS Tools Linux</td></tr>
          <tr><td>LibLibMujina (Linux)</td><td>511 / 510 кб</td><td>Linux 1.20.4 Fabric/Lunar/Vanilla — только Ocean</td></tr>
          <tr><td>Lunar Optimize</td><td>5 497 кб</td><td>System Informer / Разбор .dll</td></tr>
          <tr><td>Autoreconnect (goodman)</td><td>17 / 42 кб</td><td>me/goodman — часто в LabyMod</td></tr>
          <tr><td>Wl-Zoom GH</td><td>506 кб</td><td>Recaf / Fluddy Checker</td></tr>
          <tr><td>Jeed</td><td>44 кб</td><td>Recaf / Fluddy Checker</td></tr>
          <tr><td>PseudoAutoSprint</td><td>56.1 кб</td><td>dvd/explorer/nocheat/client/impl/ghost Hitbox.class</td></tr>
          <tr><td>Ghost-клиент</td><td>149 кб</td><td>eu/me, MainClass.class | eu/me/mods, MinecraftRender.class</td></tr>
          <tr><td>Ghost-клиент (TopkaHealth)</td><td>66 кб</td><td>ev/service/use/Bypass.class</td></tr>
          <tr><td>Ghost-клиент (MarlowsCrystal)</td><td>73 кб</td><td>com/kapiteon/freecam</td></tr>
          <tr><td>Ghost-клиент (BetterFps)</td><td>97 кб</td><td>net/client/ExampleMod.class</td></tr>
          <tr><td>FpsBoost GH</td><td>36 кб</td><td>com/shaori/fpsboost</td></tr>
          <tr><td>FabricHits</td><td>11 кб</td><td>net/fabricmc/example/ExampleMod.class</td></tr>
          <tr><td>ChanLibs (Ghost)</td><td>~613 кб</td><td>org/chainlibs/module/impl/modules</td></tr>
          <tr><td>Rolleron GH</td><td>30–34 / 41 / 43 кб</td><td>me/rolleron/launchThis.class</td></tr>
          <tr><td>Hitboxs Neat</td><td>19 / 28 / 34 / 71 / 188 / 1411 кб</td><td>vazkii/neat — нет HealthBarRenderer.class</td></tr>
          <tr><td>Hitboxs Neat (crack)</td><td>71 кб</td><td>com/modd/Crack.class</td></tr>
          <tr><td>Hitboxs Creative Core</td><td>99–104 кб</td><td>creativecore/Start.class — часто встречаются</td></tr>
          <tr><td>Hitboxs MinecraftOptimization</td><td>69 кб</td><td>dev/minecraftoptimization — часто</td></tr>
          <tr><td>Hitboxs bushroot</td><td>8 / 10 / 21 кб</td><td>me/bushroot — часто</td></tr>
          <tr><td>Hitboxs ChunkAnimator</td><td>7 / 20 / 53 кб</td><td>com/magma4496/Creatormagma.class</td></tr>
          <tr><td>Hitboxs CustomHitboxes</td><td>151 кб</td><td>lmao/drip/customhitboxes</td></tr>
          <tr><td>Hitboxs FullBrightnessToggle</td><td>7 кб</td><td>Анализ через Recaf</td></tr>
          <tr><td>Hitboxs FpsReducer (AutoJump)</td><td>144 кб</td><td>bre2el/fpsreducer/Client.class</td></tr>
          <tr><td>Hitboxs ClickThrough (AutoJump)</td><td>100 кб</td><td>Анализ через Recaf</td></tr>
          <tr><td>Hitboxs Toro Health</td><td>252 кб</td><td>a.class, b.class и т.д.</td></tr>
          <tr><td>Hitboxs TopkaVisual</td><td>42 кб</td><td>org/scamservice/Init.class</td></tr>
          <tr><td>Hitboxs TopkaVisual v2</td><td>64 кб</td><td>dev/service/baing/Bypass.class</td></tr>
          <tr><td>Hitboxs ShulkerTooltip</td><td>12 кб</td><td>Анализ через Recaf</td></tr>
          <tr><td>Hitboxs TapeMouse</td><td>28 / 170 кб</td><td>net/dries007/tapemouse/tapemouseOnOff</td></tr>
          <tr><td>Hitboxs (DCrasher)</td><td>21 кб</td><td>Protected-by-DCrasher</td></tr>
          <tr><td>Hitboxs (telegram)</td><td>79 кб</td><td>minecraft/telegram/@markcls/GODSYSTEM</td></tr>
          <tr><td>Hitboxs (obfuscated)</td><td>99 кб</td><td>OBFUSCATED WITH Gromek.class</td></tr>
          <tr><td>Hitboxs (rejavasteal)</td><td>544 кб</td><td>@rejavastealbot - telegram.class</td></tr>
          <tr><td>Hitboxs (ichun)</td><td>584 кб</td><td>me/ichun/mods/ichunutil</td></tr>
          <tr><td>ALLATORI hb</td><td>7 кб</td><td>ALLATORI — нечитаемые .class</td></tr>
          <tr><td>Безымянный dll</td><td>1 525 кб</td><td>System Informer / Разбор .dll</td></tr>
          <tr><td>Безымянный dll</td><td>1 397 кб</td><td>System Informer / Разбор .dll</td></tr>
          <tr><td>Безымянный dll</td><td>13 591 кб</td><td>System Informer</td></tr>
        </tbody>
      </table>
    `,
    callout: null,
    calloutLink: null,
    steps: [
      "Использовать как справочник при анализе.",
      "Сверять вес с System Informer — отклонение до 3–5% допустимо.",
      "При совпадении — всегда проверять через anticheat.ac/strings.",
      "Пополнять по мере нахождения новых читов.",
    ],
  },

];

// ════════════════════════════════════════════════════════════════════════════
//  STATE
// ════════════════════════════════════════════════════════════════════════════
let visitedPages = new Set();
let currentPage  = 0;

// ════════════════════════════════════════════════════════════════════════════
//  BUILD NAV
// ════════════════════════════════════════════════════════════════════════════
function buildNav() {
  const nav = document.getElementById('sidebarNav');
  pages.forEach((p, i) => {
    const item = document.createElement('div');
    item.className     = 'nav-item' + (i === 0 ? ' active' : '');
    item.dataset.index = i;
    item.innerHTML = `
      <span class="nav-num">${String(i).padStart(2,'0')}</span>
      <span class="nav-dot"></span>
      <span>${p.title.trim()}</span>
    `;
    item.addEventListener('click', () => goToPage(i));
    nav.appendChild(item);
  });
}



// ════════════════════════════════════════════════════════════════════════════
//  BUILD PAGES
// ════════════════════════════════════════════════════════════════════════════
function buildPages() {
  const container = document.getElementById('pagesContainer');
  pages.forEach((p, i) => {
    const page     = document.createElement('div');
    page.className = 'page' + (i === 0 ? ' active' : '');
    page.id        = `page-${i}`;

    const stepsHTML = p.steps.map(s => `<li>${s}</li>`).join('');
    const prevBtn = i > 0
      ? `<button class="nav-btn" onclick="goToPage(${i-1})">← Назад</button>`
      : '';
    const nextBtn = i < pages.length - 1
      ? `<button class="nav-btn primary" onclick="goToPage(${i+1})">Далее →</button>`
      : `<button class="nav-btn primary" disabled>✓ Завершено</button>`;

    page.innerHTML = `
      <div class="page-tag">${p.tag}</div>
      <h1>${p.title}</h1>
      <p class="page-intro">${p.intro}</p>

      <div class="section-title">Содержание</div>
      <div class="content-body">${p.content}</div>

      <div class="section-title">Краткий алгоритм</div>
      <ol class="steps">${stepsHTML}</ol>

      <div class="nav-buttons">${prevBtn}${nextBtn}</div>

      <div class="page-footer">
        <span class="page-footer-copy">© 2025 <strong>iqxpeax</strong> — все права защищены</span>
        <div class="page-footer-links">
          <a href="https://t.me/iqxpeax" target="_blank" rel="noopener">@iqxpeax</a>
          <a href="#">@iqxpix</a>
        </div>
      </div>
    `;
    container.appendChild(page);
  });
}



// ════════════════════════════════════════════════════════════════════════════
//  NAVIGATION
// ════════════════════════════════════════════════════════════════════════════
function goToPage(index) {
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.page').forEach(el => el.classList.remove('active'));
  const navItem = document.querySelector(`.nav-item[data-index="${index}"]`);
  const pageEl  = document.getElementById(`page-${index}`);
  if (!navItem || !pageEl) return;
  navItem.classList.add('active');
  pageEl.classList.add('active');
  document.getElementById('breadcrumbCurrent').textContent = pages[index].title;
  document.getElementById('chapterBadge').textContent      = String(index).padStart(2,'0');
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

buildNav();
buildPages();
visitedPages.add(0);
updateProgress();
