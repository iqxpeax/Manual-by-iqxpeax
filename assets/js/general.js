// ════════════════════════════════════════════════════════════════════════════
//  HELPERS
// ════════════════════════════════════════════════════════════════════════════
function localImg(file, caption = '') {
  const cap = caption ? `<p class="img-caption">↑ ${caption}</p>` : '';
  const src = (typeof IMG !== 'undefined' && IMG[file.replace('.png','')]) 
    ? IMG[file.replace('.png','')] 
    : '';
  if (!src) return '';
  return `<img class="content-img" src="${src}" alt="${caption}" loading="lazy">${cap}`;
}

function codeBlock(text) {
  return `<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">⧉ Копировать</button><pre>${text}</pre></div>`;
}

function copyCode(btn) {
  const text = btn.nextElementSibling.textContent;
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = '✓ Скопировано';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = '⧉ Копировать'; btn.classList.remove('copied'); }, 2000);
  });
}

function callout(type, label, text, linkHref, linkLabel) {
  const link = linkHref ? `<a href="${linkHref}" class="callout-link" target="_blank" rel="noopener">${linkLabel} ↗</a>` : '';
  return `<div class="callout callout-${type}">
    <span class="callout-label">${label}</span>
    ${text}${link ? '<br>' + link : ''}
  </div>`;
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
    intro: "Добро пожаловать в руководство по проверке игроков. Этот мануал составлен для того, чтобы любой модератор мог самостоятельно и грамотно провести проверку — шаг за шагом, не пропустив ни одной детали. Проверку желательно проводить строго в том порядке, в котором расставлены программы в боковом меню. Автор: <strong>iqxpeax</strong>.",
    content: `
      <p>Перед первой проверкой скачайте и подготовьте все программы из списка ниже. Большинство из них портативные — не требуют установки, достаточно распаковать и запустить. Рекомендуется держать все утилиты в одной папке на рабочем столе модератора для быстрого доступа.</p>
      <p>Большинство программ также доступны на официальной платформе HolyCheck: <a href="https://mods.holyworld.me/download" target="_blank" rel="noopener">mods.holyworld.me/download ↗</a></p>

      <ul class="link-list">
        <li><span>Everything 1.5 (alpha) — поиск файлов</span><a href="https://www.voidtools.com/Everything-1.5.0.1391a.x86.zip" target="_blank" rel="noopener">Скачать ↗</a></li>
        <li><span>BamParser — история запусков .exe</span><a href="https://github.com/spokwn/BAM-parser/releases/download/v1.2.9/BAMParser.exe" target="_blank" rel="noopener">Скачать ↗</a></li>
        <li><span>InjGen — поиск JVMTI-инжекта</span><a href="https://github.com/NotRequiem/InjGen" target="_blank" rel="noopener">GitHub ↗</a></li>
        <li><span>RegScanner — поиск по реестру</span><a href="https://www.nirsoft.net/utils/regscanner.html" target="_blank" rel="noopener">Скачать ↗</a></li>
        <li><span>BrowserDownloadView — история загрузок браузера</span><a href="https://www.nirsoft.net/utils/web_browser_downloads_view.html" target="_blank" rel="noopener">Скачать ↗</a></li>
        <li><span>Ocean CLI — для игрока</span><a href="https://anticheat.ac/downloads/general/cli" target="_blank" rel="noopener">Скачать ↗</a></li>
        <li><span>ShellBag Analyzer — история папок</span><a href="https://privazer.com/ru/shellbag_analyzer_cleaner.exe" target="_blank" rel="noopener">Скачать ↗</a></li>
        <li><span>RecentFileView — недавно открытые файлы</span><a href="https://www.nirsoft.net/utils/recentfilesview.zip" target="_blank" rel="noopener">Скачать ↗</a></li>
        <li><span>ExecutedProgramsList — запускавшиеся программы</span><a href="https://www.nirsoft.net/utils/executedprogramslist.zip" target="_blank" rel="noopener">Скачать ↗</a></li>
        <li><span>UsbDriveLog — лог USB-накопителей</span><a href="https://www.nirsoft.net/utils/usbdrivelog.zip" target="_blank" rel="noopener">Скачать ↗</a></li>
        <li><span>UsbDeview — история USB-устройств</span><a href="https://www.nirsoft.net/utils/usb_devices_view.html" target="_blank" rel="noopener">Скачать ↗</a></li>
        <li><span>Recaf — декомпилятор Java (.jar)</span><a href="https://sourceforge.net/projects/recaf.mirror/files/latest/download" target="_blank" rel="noopener">Скачать ↗</a></li>
        <li><span>Journal Trace — журнал файловой системы</span><a href="https://mods.holyworld.me/download" target="_blank" rel="noopener">Через HolyCheck ↗</a></li>
        <li><span>Simple Unlocker — снятие блокировок</span><a href="https://simpleunlocker.ds1nc.ru/release/simpleunlocker_release.zip" target="_blank" rel="noopener">Скачать ↗</a></li>
        <li><span>System Informer — анализ процессов</span><a href="https://systeminformer.com/downloads.php" target="_blank" rel="noopener">Скачать ↗</a></li>
      </ul>

      <p>Проверить подозрительные моды: <a href="https://mods.holyworld.me/mods-review" target="_blank" rel="noopener">mods.holyworld.me/mods-review ↗</a></p>

      <div class="section-title">Быстрые ссылки для Journal Trace</div>
      <p>Эти строки используются при каждой проверке в Journal Trace. Подробнее — в соответствующей главе.</p>
      ${codeBlock(`directory:путь_к_папке;name:!!.`)}
      ${codeBlock(`directory:путь_к_папке;directory:config||mods||logs||addons`)}
      ${codeBlock(`directory::;name:.jar||.zip||.rar;name:!!.lnk`)}
      ${codeBlock(`directory:Downloads||Desktop`)}

      ${callout('warn', '⚠️ Важно', 'Все списки для Everything, Journal Trace и System Informer являются <strong>обязательными</strong>. Пропуск любого из них при проверке может повлечь устный выговор.')}
    `,
    steps: [
      "Скачайте все программы из списка выше и разместите в одной папке.",
      "Изучите все главы мануала в порядке бокового меню — порядок важен.",
      "InjGen запускается самым первым, ДО Ocean — иначе ложное срабатывание.",
      "При нахождении ошибок сообщайте автору — <strong>iqxpeax</strong>.",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 01  ПРОВЕРКА ИГРЫ
  // ══════════════════════════════════════════════════════════
  {
    title: "Проверка Игры",
    intro: "Эта глава охватывает весь первичный визуальный осмотр — от проверки заголовка окна Minecraft до тщательного анализа папок, дисков и корзины. Именно здесь часто удаётся обнаружить читы, которые игрок не успел или забыл скрыть.",
    content: `
      <div class="section-title">Часть 1 — Проверка внутри Minecraft</div>

      <p>Этот этап проводится сразу при подключении к проверке, пока у игрока нет времени что-то закрыть или удалить. Работаем быстро и методично.</p>

      <ul class="plain-list">
        <li><strong>Шаг 1 — Отладочный экран (F3).</strong> Нажимаем <code>F3</code>. В левом верхнем углу появляется подробная техническая информация. Первая строка содержит версию клиента. Если в ней фигурирует название чита — <span class="ban">бан</span>. Также обращаем внимание на другие подозрительные строки.</li>
      </ul>
      </ul>
      ${localImg('image36.png', 'Пример: название чит-клиента в заголовке окна')}

      <ul class="plain-list">
        <li><strong>Шаг 2 — Настройки (ESC).</strong> Нажимаем <code>Esc</code>.Если вы нашли кнопки с названиями читов это озночает <span class="ban">бан</span></li>
      </ul>
      ${localImg('image112.png', 'Пример обычного меню настроек')}
      ${localImg('image105.png', '')}

      <ul class="plain-list">
        <li><strong>Шаг 3 — Настройки управления.</strong> ESC → Настройки → Управление. Прокручиваем весь список клавиш. Ищем биндинги запрещённых функций: <em>Killaura</em>, <em>Freecam</em>, <em>X-Ray Enable</em>,  и т.п. Нашли — <span class="ban">бан</span>.</li>
      </ul>
      ${localImg('image22.png', 'Меню управления — поиск запрещённых функций')}

      <ul class="plain-list">
        <li><strong>Шаг 4 — Наборы ресурсов.</strong> ESC → Наборы ресурсов → Папка с наборами ресурсов. Смотрим на список установленных ресурспаков. Запрещённые (особенно X-Ray паки) — <span class="ban">бан</span>.</li>
      </ul>
      ${localImg('image3.png', 'Вкладка наборов ресурсов')}

      <div class="section-title">Часть 2 — Показ скрытых файлов</div>
      <p>Перед тем как идти в папки, обязательно включаем отображение скрытых файлов и папок. Многие читы специально прячут свои директории.</p>

      <ul class="plain-list">
        <li><strong>Windows 10:</strong> Открыть любую папку → Вид → Параметры → Изменить параметры папок и поиска → вкладка Вид → поставить галочку «Показывать скрытые файлы, папки и диски», убрать галочку «Скрывать расширения для зарегистрированных типов файлов».</li>
        <li><strong>Windows 11:</strong> Открыть папку → три точки (···) в верхней панели → Параметры → вкладка Вид — те же настройки.</li>
      </ul>
      ${localImg('image111.png', 'Настройка показа скрытых файлов — Windows 10')}
      

      <div class="section-title">Часть 3 — Папка .minecraft</div>
      <p>Попасть в папку можно через <code>Win+R → %appdata%\\.minecraft</code>, или через Minecraft: перейти в Наборы ресурсов → открыть папку → вернуться на уровень выше. Сначала смотрим на корень — нет ли папок с явными названиями читов (например: <em>baritone</em>, <em>meteor-client</em>, <em>vape</em>).</p>

      <p>Затем проверяем ключевые подпапки:</p>

      ${localImg('image81.png', 'Нужные файлы в папке Майнкрафта')}

      <ul class="plain-list">
        <li><strong>config</strong> — папка с конфигурационными файлами всех модов. Ищем файлы с названиями запрещённых модов. Если дата создания или изменения меньше 14 дней назад — <span class="ban">бан</span>.</li>
        <li><strong>versions</strong> — папка с установленными версиями клиента. Название папки = название чита, дата меньше 14 дней — <span class="ban">бан</span>. Если дата старше 14 дней — открываем папку: пустая — пропускаем; есть .jar файл — <span class="ban">бан за хранение</span>, даже если срок давнее. Дополнительно сравниваем вес .jar файла с таблицей оригинальных весов ниже.</li>
        <li><strong>mods / labymod / labymod-neo</strong> — все .jar файлы скидываем на HolyCheck для автоматической проверки.</li>
        <li><strong>libraries → com → github</strong> — ищем папку <em>impact</em> или <em>impact development</em>. Присутствует и дата меньше 14 дней — <span class="ban">бан</span> (следы Impact Client).</li>
        <li><strong>libraries → net → minecraftxray</strong> — сама папка существует и дата меньше 14 дней — <span class="ban">бан</span>.</li>
      </ul>

      ${localImg('image41.png', 'Пример папки .config')}
      ${localImg('image95.png', 'Папка versions — проверка имён и дат')}
      ${localImg('image32.png', 'Пример чит версии в папке versions')}
      ${localImg('image54.png', 'Пример версии Labymod должна весить 17 132 КБ')}

      <div class="section-title">Таблица правильных весов Minecraft .jar</div>
      <p>Если вес отличается от указанного — файл подозрителен. Проверяем через HolyCheck или Recaf.</p>
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
          <tr><td>LabyMod 1.16.5</td><td>до 30 000 КБ</td></tr>
        </tbody>
      </table>

      <div class="section-title">Часть 4 — Другие лаунчеры (папка Roaming)</div>
      <p>Нажимаем <code>Win+R → %appdata%</code> и проверяем другие лаунчеры Minecraft:</p>
      <ul class="plain-list">
        <li><strong>.minecraft</strong> — стандартный официальный лаунчер</li>
        <li><strong>.tlauncher</strong> — TLauncher (пиратский лаунчер, само его наличие подозрительно)</li>
        <li><strong>salwyr</strong> — Salwyr лаунчер</li>
      </ul>
      ${localImg('image110.png', 'Папка Roaming — другие лаунчеры')}
      <p><strong>Lunar Client:</strong> нажимаем <code>Win+R → .lunarclient</code>. Переходим: <strong>profiles → lunar</strong>. Открываем все версии выше 1.16 → папка <strong>mods</strong> → скидываем все .jar на HolyCheck. Наличие модов с запрещённым функционалом = бан.</p>

      <div class="section-title">Часть 5 — Диски C, D и другие</div>
      <p>Проверяем корень каждого диска на наличие папок с запрещёнными именами (celka, nursultan, vape, liquidbounce, doomsday и т.д.):</p>
      <ul class="plain-list">
        <li>Дата модификации менее 14 дней — <span class="ban">бан немедленно</span>.</li>
        <li>Дата более 14 дней — открываем папку. Есть .jar или .exe внутри — <span class="ban">бан</span> вне зависимости от даты.</li>
      </ul>
      ${localImg('image58.png', 'Проверка корня диска')}

      <div class="section-title">Часть 6 — Корзина ($RECYCLE.BIN)</div>
      <p>Открываем диск C → папка <code>$RECYCLE.BIN</code> (скрытая, включите показ скрытых файлов).</p>
      <ul class="plain-list">
        <li>Запрещённые .exe или .jar в корзине — <span class="ban">бан</span>.</li>
        <li>Папки с именами читов + дата менее 14 дней — <span class="ban">бан</span>.</li>
        <li>Папки с именами читов + дата более 14 дней — восстанавливаем, смотрим содержимое. Есть .exe или .jar — <span class="ban">бан</span>.</li>
        <li><strong>Критично:</strong> смотрим дату изменения самой корзины. Если она была изменена уже во время проверки — игрок что-то удалял прямо сейчас — <span class="ban">бан</span>.</li>
      </ul>
      ${localImg('image51.png', 'Корзина — проверка содержимого и дат')}

      <div class="section-title">Часть 7 — Загрузки, Рабочий стол, Документы</div>

      <p><strong>Загрузки:</strong></p>
      <ul class="plain-list">
        <li>Файл с именем чита (.exe или .jar) — <span class="ban">бан</span>.</li>
        <li>Пустая папка с именем чита, дата менее 14 дней — <span class="ban">бан</span> (файлы удалены, но папка осталась).</li>
        <li>Папка с любым содержимым (.exe или .jar) c читом — <span class="ban">бан</span> вне зависимости от даты.</li>
        <li>Подозрительные .jar и .exe без явного чит-имени — запускаем двойным кликом. Открылся чит — <span class="ban">бан</span>. .jar также можно закинуть на HolyCheck.</li>
        <li>Проверяем папку <strong>Telegram Desktop</strong> внутри загрузок — там нередко скачивают файлы через мессенджер.</li>
      </ul>
      ${localImg('image70.png', 'Пример Holycheck')}
      ${localImg('image113.png', 'Пример libaries')}

      <p><strong>Рабочий стол:</strong> смотрим на подозрительные .exe и .jar, открываем или закидываем на HolyCheck. Открылся читерский софт — <span class="ban">бан</span>.</p>
      ${localImg('image45.png', 'Рабочий стол')}

      <p><strong>Документы:</strong> ищем .exe, .jar и подозрительные папки. Название чита — <span class="ban">бан</span>. Открыли файл и запустился чит — <span class="ban">бан</span>.</p>
    `,
    steps: [
      "F11 → оконный режим → заголовок окна.",
      "F3 → строка версии — нет ли имени чита.",
      "ESC → Настройки → Управление — запрещённые биндинги.",
      "ESC → Наборы ресурсов — X-Ray паки.",
      "Включить показ скрытых файлов в Windows.",
      "Проверить .minecraft: config, versions, mods, libraries.",
      "Roaming — другие лаунчеры, Lunar Client моды.",
      "Корень дисков C и D — запрещённые папки.",
      "Корзина — содержимое и дата изменения.",
      "Загрузки, Telegram Desktop, рабочий стол, документы.",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 02  EVERYTHING 1.5
  // ══════════════════════════════════════════════════════════
  {
    title: "Everything 1.5",
    intro: "Everything 1.5 (alpha) — программа для мгновенного поиска любых файлов по всей файловой системе. Умеет искать по имени, расширению, точному размеру и даже по внутреннему содержимому файла (utf8content). Обязательно используйте именно alpha-версию 1.5 — в ней доступны расширенные операторы поиска.",
    content: `
      ${callout('warn', '⚠️ Обязательно', 'Все 8 списков являются обязательными при каждой проверке. Пропуск любого из них может повлечь устный выговор.')}

      <div class="section-title">Предварительная настройка</div>
      <p>Если Everything уже установлен у игрока — сначала проверяем настройки. Игрок мог добавить папки в исключения, чтобы скрыть содержимое:</p>
      <ul class="plain-list">
        <li><code>Ctrl+P → Exclude → Enable exclude list</code> — если галочка стоит, убираем её. Иначе файлы из исключённых папок не появятся в поиске.</li>
        <li>Вкладка <strong>NTFS</strong> — включаем все галочки у каждого диска. Если дисков несколько — проверяем каждый отдельно.</li>
        <li>Вкладка <strong>FAT</strong> — те же настройки для USB-флешек. Если флешек несколько — настраиваем каждую.</li>
      </ul>
      ${localImg('image1.png', 'Настройки Everything — вкладка Exclude')}
      ${localImg('image39.png', 'Настройки NTFS — все диски')}
      ${localImg('image115.png', 'Настройки FAT — флешки')}

      <div class="section-title">📋 Список 1 — Поиск по именам читов (.exe и .jar)</div>
      <p>Главный список — ищет файлы с названиями известных чит-клиентов среди всех .exe и .jar. Нашло — смотрим путь, дату, запускаем файл. Чит = <span class="ban">бан</span>.</p>
      ${codeBlock(`ext:.exe;.jar regex:(?i)(shellbag|impact|wurst|bleach[-_]?hack|aristois|huzuni|skill[-_]?client|nodus|inertia|ares|sigma|meteor|atomic|zamorozka|liquid[-_]?bounce|nurik|nursultan|celestial|calestial|celka|expensive|neverhook|excellent|wexside|wild|minced|deadcode|akrien|jigsaw|future|jessica|dreampool|vape|infinity|squad|no[-_]?rules|konas|zeus[-_]?client|rich[-_]?client|ghost[-_]?client|rusher[-_]?hack|thunder[-_]?hack|moon[-_]?hack|winner|nova|exire|doomsday|nightware|ricardo|extazyy|troxill|arbuz|dauntiblyat|rename[-_]?me[-_]?please|edit[-_]?me|takker|faker|xameleon|fuze[-_]?client|wise[-_]?folder|net[-_]?limiter|feather|delta|eclipse|venus|jex|hakari|hush|hach|rogalik|catlavan|haruka|wissend|fluger|sperma|vortex|newcode|astra|britva|bariton|bot|player|freecam|bedrock|hotbar|swap|chest|gumball|tweak|entity|viabackwards|viaforge|viaproxy|hitbox|elytra|xaero|through|mob|auto|place|health|inventory|x[-_]?ray|clean[-_]?cut|smart[-_]?moving|save[-_]?searcher|world[-_]?downloader|trade[-_]?finder|chorus[-_]?find|inv[-_]?move|chunk[-_]?copy|seed[-_]?cracker|diamond[-_]?sim|forge[-_]?hax|step[-_]?up|client[-_]?commands|camera[-_]?utils|cheat[-_]?utils|universal[-_]?mod|swing[-_]?through[-_]?grass|shift[\\s_-]?tap|aim[\\s_-]?assistance|grass[\\s_-]?pas|motor[\\s_-]?assistance|player[\\s_-]?highlighter|slippery[\\s_-]?mod|entity-outliner|elytraswapperplusclient|chest[\\s_-]?esp|armor[\\s_-]?hot[\\s_-]?swap|fallen|aurora|wine[\\s_-]?launcher|sh[\\s_-]?project|trigger[\\s_-]?bot|collapse|melonity|blessed|creator1171|Spawner[\\s_-]?Locator)`)}
      ${localImg('image23.png', 'Пример результатов — поиск по именам')}

      <div class="section-title">📋 Список 2 — Лоудеры и остатки читов</div>
      <p>Ищет лоудеры, клинеры и характерные имена файлов, связанных с читами. Файл переименован (например .exe → .png) — переименовываем обратно в .exe и запускаем. Открылся лоудер — <span class="ban">бан</span>.</p>
      ${codeBlock(`nursultan|baritone|"deltaloader"|"deltaclient"|"wexside"|xameleon|takker|"newlauncher"|troxill|nemezida|doomsday|thunderhack|wisefolder|"venusfr"|.faker|vec.dll|cleancut|wildclient|SwingThroughGrass|viabackwards|viaforge|viaproxy|vialoader|viamcp|"akrien"|"dreampool"|"norules"|"invmove"|"impactclient"|richclient|rusherhack|inventory_walk|evaware|aimbot|celestial|calestial|celka|expensive|neverhook|excellent|wurst|bleachhack|aristois|huzuni|skillclient|liquidbounce|nurik|minced|deadcode|konas|nightware|extazyy|troxil|antileak|arbuz|.akr|dauntiblyat|rename_me_please|fuzeclient|double_hotbar|smart_moving|savesearcher|topkautobuy|topkaautobuy|tweakeroo|librarian_trade_finder|sacurachorusfind|entity_outliner|DiamondSim|ForgeHax|clientcommands|CutThrough|Control-Tweaks|minced|fsutil.exe-|hideme.exe|shellbag_analyzer_cleaner.ini|catlavan|deadcode|haruka|dreampool|norules|zeusclient|richclient|ghost_client|rusherhack|moonhack|ricardo|extazyy|troxill|antileak|takker|fuzeclient|wisefolder|netlimiter|USBOblivion.exe|hakari|hush|rogalik|vortexclient|caballeta|xray|aristoris|x-ray|entity_xray|invtweaks|zamorozka|vape|konas|"ghost_client"|".flauncher"|clean-main|exire|"rockstarclient"|Blast3x|Javalin|quickclient|quick|meow|monoton|dimasik|dimasikclient|weaver|weaverclient|PolyakDLC|DLC|ExosWare|ExosWareclient|launcher|Sk3dGuard|dickclient|divan|divanclient`)}
      ${localImg('image28.png', 'Пример результатов — лоудеры')}

      <div class="section-title">📋 Список 3 — Конфиги и логи запрещённых модов</div>
      <p>Ищет конфигурационные файлы (.json, .toml, .yml и др.) с именами запрещённых модов, изменённые за последние 14 дней. Даже если сам .jar удалён — конфиг часто остаётся.</p>
      ${codeBlock(`ext:.txt;.json;.toml;.yml;.cfg;.properties | folder: dm:last14days regex:(bariton|bot|player|freecam|bedrock|hotbar|swap|chest|gumball|tweak|entity|crystal|optimizer|viabackwards|viaforge|viaproxy|hitbox|elytra|xaero|through|mob|auto|place|health|inventory|x[-_]?ray|clean[-_]?cut|smart[-_]?moving|save[-_]?searcher|world[-_]?downloader|trade[-_]?finder|chorus[-_]?find|inv[-_]?move|chunk[-_]?copy|seed[-_]?cracker|diamond[-_]?sim|forge[-_]?hax|step[-_]?up|client[-_]?commands|camera[-_]?utils|cheat[-_]?utils|universal[-_]?mod|swing[-_]?through[-_]?grass|shift[\\s_-]?tap|aim[\\s_-]?assistance|grass[\\s_-]?pas|motor[\\s_-]?assistance|player[\\s_-]?highlighter|slippery[\\s_-]?mod|entity-outliner|elytraswapperplusclient|chest[\\s_-]?esp|armor[\\s_-]?hot[\\s_-]?swap|fallen|aurora|wine[\\s_-]?launcher|sh[\\s_-]?project|trigger[\\s_-]?bot|collapse|melonity|blessed|creator1171|Spawner[\\s_-]?Locator)`)}

      <div class="section-title">📋 Список 4 — vec.dll и mp3-читы</div>
      <p>Ищет vec.dll (30 КБ — dll-хитбоксы) и mp3-чит (файл с нестандартным PID). Нашло 30 КБ файл — <span class="ban">бан</span> (есть малый шанс ложного срабатывания, проверяйте). Нашло по второму размеру (mp3): откройте <code>cmd</code>, перетащите файл туда, добавьте пробел и введите PID процесса Minecraft. Получили в ответ тот же PID — <span class="ban">бан</span>.</p>
      ${codeBlock(`size:30kb utf8content:net/minecraft/util/math/axisalignedbb | size:9400174`)}

      <div class="section-title">📋 Список 5 — Avalone всех видов и клинеры</div>
      <p>Ищет Avalone (чит с маскировкой) и различные клинеры по точному размеру. Нашло — запускаем двойным кликом. Открылся Avalone или клинер — <span class="ban">бан</span>.</p>
      ${codeBlock(`*.exe size:1566208 | size:22285824 | size:1010176 | size:22433280 | size:348672 | size:352256 | size:782848 | size:6887424 | size:763392 | size:6111 | size:743424 | size:1767424 | size:823808 | size:18126848 | <size:700kb..5mb utf8content:net/minecraftforge/fml/loading/FMLLoader | glowEsp> | <size:14mb..17mb utf8content:D3D11CreateDeviceAndSwapChain|LoadLibraryA>`)}
      <p>Avalone переименованный в .exe, .png, .txt (меняем расширение обратно на .exe и запускаем):</p>
      ${codeBlock(`size:700kb..5mb ext:exe utf8content:TriggerBot|net/minecraft/entity/player/PlayerEntity`)}
      ${codeBlock(`size:700kb..5mb ext:png utf8content:TriggerBot|net/minecraft/entity/player/PlayerEntity`)}
      ${codeBlock(`size:700kb..5mb ext:txt utf8content:TriggerBot|net/minecraft/entity/player/PlayerEntity`)}
      ${localImg('image2.png', 'Поиск инжекторов и клинеров')}

      <div class="section-title">📋 Список 6 — DoomsDay (.jar)</div>
      <p>DoomsDay — чит с уникальной внутренней структурой. Нашло — запускаем двойным кликом. Открылся DoomsDay — <span class="ban">бан</span>. Потом убираем <code>*.jar</code> из строки — ищем переименованные копии. Переименовываем в .jar и проверяем снова. (Сканировать долго — можно вписать и идти дальше параллельно.)</p>
      ${codeBlock(`*.jar size:21kb-10mb utf8content:net/java/s.class utf8content:net/java/f.class`)}
      ${codeBlock(`size:21kb-10mb utf8content:net/java/s.class utf8content:net/java/f.class`)}
      ${localImg('image109.png', 'Поиск DoomsDay')}

      <div class="section-title">📋 Список 7 — Хитбоксы по размеру (.jar)</div>
      <p>Огромный список точных размеров .jar файлов с хитбоксами. Обычно находит 0–10 файлов, но проверять нужно каждый — открывать или закидывать на HolyCheck.</p>
      ${codeBlock(`*.jar size:2263|size:5266|size:6515|size:6770|size:6778|size:7016|size:7218|size:7803|size:7891|size:9327|size:10283|size:10605|size:10958|size:11554|size:16541|size:17308|size:17339|size:18180|size:18527|size:18587|size:18734|size:19266|size:20578|size:20583|size:20639|size:20883|size:21161|size:21234|size:21664|size:22036|size:22861|size:26247|size:27546|size:27809|size:28084|size:28439|size:29304|size:29567|size:30279|size:31549|size:31607|size:34449|size:34669|size:35971|size:35993|size:38149|size:39017|size:39321|size:40142|size:42782|size:47159|size:48242|size:50828|size:51212|size:52426|size:54088|size:59381|size:62782|size:65316|size:65486|size:65765|size:66659|size:67491|size:68794|size:69757|size:72334|size:74105|size:80751|size:88896|size:95530|size:98811|size:100523|size:100799|size:101297|size:101571|size:101703|size:102297|size:102733|size:103761|size:104954|size:105623|size:105672|size:112386|size:120640|size:138417|size:143006|size:143597|size:143600|size:147329|size:147873|size:151762|size:153937|size:156722|size:156779|size:166677|size:169718|size:173698|size:183634|size:183651|size:192156|size:202720|size:257482|size:263070|size:267746|size:274865|size:300286|size:334588|size:343169|size:350629|size:409616|size:410358|size:517248|size:519731|size:532826|size:539151|size:556494|size:597406|size:636621|size:640838|size:878781|size:925493|size:1077149|size:1165063|size:1181556|size:1444714|size:1471429|size:1569093|size:1822841|size:3113569|size:3425801|size:3541075|size:3541138|size:3642292|size:3684385|size:4642998|size:5630483|size:7052171|size:7059952|size:22258750|size:25704986|size:26179274|size:26691896`)}

      <div class="section-title">📋 Список 8 — Читы в .dll</div>
      ${codeBlock(`*.dll size:11767808 | size:486400 | size:15294464 | size:5641728 | size:2273792 | size:819987 | size:3823616 | size:1686528 | size:1560713`)}

      <div class="section-title">📋 Список 9 — Читы в .jar (хитбоксы, клиенты, триггерботы)</div>
      ${codeBlock(`*.jar size:2405 | size:2263 | size:3089 | size:4447 | size:6289 | size:7234 | size:7272 | size:8191 | size:8195 | size:9068 | size:9372 | size:10283 | size:11193 | size:14569 | size:17339 | size:19950 | size:19996 | size:20639 | size:20883 | size:24662 | size:25349 | size:26255 | size:27152 | size:27546 | size:28084 | size:34669 | size:35971 | size:51079 | size:54088 | size:65486 | size:69757 | size:90139 | size:95121 | size:95195 | size:100183 | size:102128 | size:103620 | size:104255 | size:113386 | size:114974 | size:120071 | size:137550 | size:151762 | size:170201 | size:181747 | size:186566 | size:192156 | size:257482 | size:286362 | size:335770 | size:365980 | size:380768 | size:383073 | size:434725 | size:569437 | size:612658 | size:625367 | size:895578 | size:925493 | size:967068 | size:1045107 | size:1330279 | size:1565003 | size:1822841 | size:1844101 | size:1870498 | size:3283826 | size:3372839 | size:3425801 | size:3841809 | size:4049697 | size:4059091 | size:4101247 | size:4610404 | size:4610405 | size:6009357 | size:6349526 | size:6377588 | size:6699922 | size:6731555 | size:7052171 | size:7743912 | size:11464320 | size:13650364 | size:22205672 | size:28632494 | size:44722980 | size:47608266`)}

      <div class="section-title">📋 Список 10 — Читы в .exe</div>
      ${codeBlock(`*.exe size:547827 | size:1309696 | size:14202368 | size:782848 | size:53760 | size:13686784 | size:28107997 | size:22763666 | size:17731024 | size:72832762 | size:8520278 | size:63326352 | size:11421787 | size:11463432 | size:743936 | size:823808 | size:9388032 | size:191206617 | size:11897599 | size:11877071 | size:16197700 | size:16192613 | size:12173155 | size:16190579 | size:16674923 | size:15361912 | size:13734493 | size:12474796 | size:12104654 | size:19521024 | size:41382400 | size:4426752 | size:5253632 | size:52722370 | size:38520304 | size:27185152`)}
      ${localImg('image17.png', 'Поиск читов в .exe')}
      ${localImg('image73.png', 'Результаты поиска по размеру')}

      <div class="section-title">Необязательные, но полезные списки</div>
      <p><strong>Замаскированные .exe и .dll</strong> — ищет исполняемые файлы, переименованные в другие расширения (.mp3, .txt, .zip и т.д.). Переименовываем в .exe, запускаем или открываем блокнотом и кидаем код в нейросеть.</p>
      ${codeBlock(`da:[currentDate] !.exe !.dll size:700kb..30mb file: content:"This program cannot be run in DOS mode."`)}
      <p><strong>Все .exe 5–55 МБ</strong> — показывает exe в этом диапазоне веса. Открываем каждый с подозрительным именем. Лоудер = <span class="ban">бан</span>.</p>
      ${codeBlock(`size:5mb..55mb ext:exe`)}
    `,
    steps: [
      "Проверить настройки: Exclude выключен, NTFS и FAT — все диски включены.",
      "Список 1 — имена читов в .exe и .jar.",
      "Список 2 — лоудеры, остатки, характерные имена.",
      "Список 3 — конфиги запрещённых модов за 14 дней.",
      "Список 4 — vec.dll и mp3-чит.",
      "Список 5 — Avalone и клинеры (+ переименованные варианты).",
      "Список 6 — DoomsDay (две строки: с *.jar и без).",
      "Список 7 — хитбоксы по размеру .jar.",
      "Списки 8, 9, 10 — читы в .dll, .jar, .exe.",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 03  BAMPARSER & INJGEN
  // ══════════════════════════════════════════════════════════
  {
    title: "BamParser & InjGen",
    intro: "BamParser читает данные службы BAM (Background Activity Moderator) из реестра Windows — это лог всех .exe файлов, которые когда-либо запускались на этом компьютере. InjGen — специализированный инструмент для обнаружения активного JVMTI-инжекта в процессах Minecraft.",
    content: `
      <ul class="link-list">
        <li><span>BamParser v1.2.9</span><a href="https://github.com/spokwn/BAM-parser/releases/download/v1.2.9/BAMParser.exe" target="_blank" rel="noopener">Скачать ↗</a></li>
        <li><span>InjGen</span><a href="https://github.com/NotRequiem/InjGen" target="_blank" rel="noopener">GitHub ↗</a></li>
      </ul>

      ${callout('danger', '🚨 Порядок запуска', 'InjGen запускать самым первым — ДО Ocean. После запуска Ocean он даст ложное срабатывание и его результат будет бесполезен.')}

      <div class="section-title">InjGen — обнаружение JVMTI-инжекта</div>
      <p>JVMTI (Java Virtual Machine Tool Interface) — низкоуровневый интерфейс, позволяющий внешнему коду взаимодействовать с JVM в реальном времени. Читы используют его для инжекта чит-кода прямо в запущенный процесс Minecraft, не создавая заметных файлов на диске.</p>
      <p>InjGen сканирует все запущенные процессы <code>javaw.exe</code> на признаки активного JVMTI-инжекта. Обнаруживает:</p>
      <ul class="plain-list">
        <li>Vape Lite Client и Vape V4 Client</li>
        <li>DoomsDay Client</li>
        <li>Slinky Client, Sunset Client</li>
        <li>Karma Client, Cortex Client</li>
      </ul>
      <p>Протестирован на: Lunar Client (все версии), Feather Client (все версии), Minecraft Vanilla 1.7.10–1.21.4, LabyMod.</p>

      <div class="section-title">BamParser — анализ истории BAM</div>
      ${localImg('image25.png', 'Внешний вид BamParser')}
      <p>BAM — служба Windows, которая в реестре ведёт лог всех запускавшихся .exe файлов. Данные хранятся постоянно и не стираются при обычном удалении. BamParser читает эти записи и показывает в удобном виде.</p>

      <p><strong>Порядок работы:</strong></p>
      <ul class="plain-list">
        <li>Открываем BamParser у игрока от имени администратора, ждём полной загрузки всех процессов.</li>
        <li>Нажимаем галочку <strong>Not Signed Only</strong> — отображаем только неподписанные файлы. Читы, как правило, не имеют цифровой подписи.</li>
        <li>Просматриваем все .exe. Название чита — <span class="ban">бан</span>.</li>
      </ul>
      ${localImg('image78.png', 'BamParser — фильтр Not Signed Only')}

      <p><strong>Нестандартные ситуации:</strong></p>
      <ul class="plain-list">
        <li><strong>Файл переименован</strong> (.exe → .rar, .zip, .png, .mp3 и т.д.) — находим файл в Everything, переименовываем обратно в .exe, запускаем. Открылся лоудер — <span class="ban">бан</span>. Это значит игрок сменил расширение чтобы скрыть файл.</li>
        <li><strong>Файл помечен как удалённый (deleted)</strong> — открываем Journal Trace и ищем операцию удаления этого файла. Удаление после начала проверки или после запуска Minecraft — <span class="ban">бан</span>. Также смотрим на переименование перед удалением (например .exe → .txt → удалён).</li>
        <li><strong>Файл скачан с чит-сайта</strong> — находим его в Browser Download View. Источник — сайт cortex, nemezida, vape.gg или любой другой чит-ресурс — <span class="ban">бан</span>.</li>
      </ul>
      ${localImg('image47.png', 'Пример подозрительного файла в BamParser')}
    `,
    steps: [
      "Запустить InjGen в самом начале проверки (до Ocean).",
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
    intro: "BrowserDownloadsView от NirSoft собирает историю загрузок из всех установленных браузеров — Chrome, Firefox, Edge, Opera, Brave и других. Незаменима, когда игрок уже удалил скачанный чит, но не догадался очистить историю браузера.",
    content: `
      ${localImg('image94.png', 'Внешний вид BrowserDownloadsView')}
      <p>Программа показывает: URL источника, оригинальное имя файла, его размер, дату скачивания, из какого браузера был скачан и статус (файл существует или удалён).</p>

      <p><strong>Алгоритм проверки:</strong></p>
      <ul class="plain-list">
        <li>Сортируем по колонке <strong>End Time</strong> — самые свежие загрузки сверху.</li>
        <li>Просматриваем все загрузки за последние <strong>14 дней</strong>.</li>
        <li>Файл .exe или .jar скачан с сайта чита (cortex, nemezida, vape.gg, liquidbounce.net и т.п.) — <span class="ban">бан</span>.</li>
        <li>Скачан с Discord или Telegram — находим файл и проверяем его.</li>
        <li>Скачан с официального сайта модов (curseforge, modrinth) — смотрим на название файла. Запрещённое имя — <span class="ban">бан</span>.</li>
        <li><strong>Важно:</strong> смотрим именно на имя файла, не только на источник. Один и тот же чит можно скачать с любого сайта.</li>
      </ul>
    `,
    steps: [
      "Скачать и запустить BrowserDownloadsView.",
      "Сортировать по End Time — свежие загрузки сверху.",
      "Проверить все загрузки за 14 дней.",
      "Чит-сайт = бан; Discord/Telegram = проверить файл.",
      "Подозрительные файлы — проверить через Everything и HolyCheck.",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 05  LASTACTIVITYVIEW
  // ══════════════════════════════════════════════════════════
  {
    title: "LastActivityView",
    num: "Глава 05",
    intro: "LastActivityView строит хронологическую картину активности пользователя, собирая данные из журналов событий, реестра, метаданных файлов и других источников. Запускайте эту программу сразу при начале проверки — до того как игрок успеет что-то предпринять.",
    content: `
      ${localImg('image104.png', 'Внешний вид LastActivityView')}

      <p><strong>Основной алгоритм:</strong></p>
      <ul class="plain-list">
        <li>Запускаем программу. Нажимаем <code>Ctrl+F</code>, вводим <strong>javaw</strong> — находим момент запуска Minecraft.</li>
        <li>Листаем вверх от найденной записи — смотрим, что делал пользователь непосредственно до этого и до начала проверки.</li>
      </ul>

      <p><strong>Что является основанием для бана:</strong></p>
      <ul class="plain-list">
        <li>Перед проверкой запускались ShellBag, .bat или .cmd файлы — скорее всего запускался клинер.</li>
        <li>Программа выглядит аномально «чистой» — почти нет активности — это признак намеренной очистки следов.</li>
        <li>Подозрительная активность непосредственно перед подключением к проверке.</li>
      </ul>

      ${callout('danger', '🔍 Проверка .bat файлов', 'Если в активности есть запуск .bat файла — переходим по его пути и открываем блокнотом. Если внутри обнаружим строку ниже — это скрипт удаления Journal Trace — <strong>бан на 14 дней</strong>.')}

      ${codeBlock(`powershell -Command "Start-Process cmd -ArgumentList '/c fsutil usn deletejournal /D /C:' -Verb RunAs"`)}
      <p>Эта команда удаляет USN-журнал файловой системы — именно тот, который анализирует Journal Trace. Это прямое свидетельство попытки уничтожить улики.</p>
    `,
    steps: [
      "Запустить LastActivityView сразу при начале проверки.",
      "Ctrl+F → javaw — найти момент запуска Minecraft.",
      "Просмотреть активность выше — что делалось до проверки.",
      "Подозрительные .bat — открыть блокнотом и проверить.",
      "Чистка Journal Trace в .bat = бан на 14 дней.",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 06  OCEAN / CLI OCEAN
  // ══════════════════════════════════════════════════════════
  {
    title: "Ocean / CLI Ocean",
    intro: "Ocean — основной инструмент глубокого системного анализа от anticheat.ac. Работает по принципу клиент-сервер: модератор видит результаты в веб-панели, а на компьютере игрока запускается сканирующий агент OceanCLI.",
    content: `
      ${localImg('image87.png', 'Панель модератора — anticheat.ac/dashboard')}

      <div class="section-title">Если у игрока не загружается сайт</div>
      <ul class="plain-list">
        <li>Попробовать другой браузер (Chrome, Firefox, Edge).</li>
        <li>Скачать и запустить <strong>zapret</strong> — инструмент обхода блокировок, помогает в том числе с anticheat.ac.</li>
      </ul>

      <div class="section-title">Запуск OceanCLI у игрока</div>
      <ul class="plain-list">
        <li>Создать папку на рабочем столе с любым именем (например: <em>Ocean</em> или <em>123</em>).</li>
        <li>Переместить туда файл <code>OceanCLI.exe</code>.</li>
        <li>Скопировать путь к папке: зажать Shift + ПКМ по папке → «Копировать как путь».</li>
        <li>Открыть командную строку: <code>Win+R → cmd → Enter</code>.</li>
        <li>Ввести: <code>cd [вставить путь к папке]</code> → Enter.</li>
        <li>Ввести: <code>OceanCLI.exe [Pin-код с сайта]</code> → Enter.</li>
        <li>Ждать от 1 до 7 минут. Результат появится в веб-панели модератора.</li>
      </ul>
      ${localImg('image11.png', 'Запуск OceanCLI в CMD')}
      ${localImg('image98.png', 'Процесс сканирования')}
      ${localImg('image116.png', 'Пример чистого результата')}

      <div class="section-title">Критерии бана по результатам Ocean</div>
      <ul class="plain-list">
        <li><span class="ban">Generic Jvmti injection (Type A)</span> — активный JVMTI-инжект. Бан.</li>
        <li><span class="ban">Generic Injection (Type A)</span> — активный инжект. Бан.</li>
        <li><span class="warn-text">Название чита</span> — бан, но с уточнением. Cortex, Nursultan, Prestige могут срабатывать ложно если чит был удалён более года назад — Ocean всё равно находит остаточные следы. Требует дополнительного расследования.</li>
        <li><span class="ban">Generic Cheat (A)</span> — признаки чита. Бан.</li>
        <li>Нестандартные срабатывания — уточните у старшего модератора.</li>
      </ul>
      ${localImg('image40.png', 'Пример срабатывания Ocean')}
      ${localImg('image74.png', 'Детект чит-клиента')}
      ${localImg('image26.png', 'Детали срабатывания')}
      ${localImg('image75.png', 'Полный результат сканирования')}
    `,
    steps: [
      "Открыть anticheat.ac/dashboard в браузере (для модератора).",
      "Скачать игроку OceanCLI.exe.",
      "Если сайт не грузится — другой браузер или zapret.",
      "Создать папку → переместить OceanCLI → запустить через CMD с Pin-кодом.",
      "Ждать 1–7 минут, смотреть результат в панели.",
      "Оценить результат по критериям бана.",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 07  SHELLBAG
  // ══════════════════════════════════════════════════════════
  {
    title: "ShellBag",
    intro: "ShellBag — данные реестра Windows, в которых хранится история папок, открывавшихся в Проводнике. Ключевая особенность: эти данные сохраняются даже после удаления самих папок. Это позволяет обнаружить следы читов, которые игрок уже стёр.",
    content: `
      ${localImg('image12.png', 'Внешний вид ShellBag Analyzer')}
      <p>После запуска сортируем список по дате модификации. Ищем запрещённые имена папок за последние 14 дней: имена чит-клиентов, инжекторов, папки в нестандартных путях (AppData, Temp, флешки).</p>

      ${localImg('image89.png', 'Сортировка по дате')}
      ${localImg('image107.png', 'Пример подозрительной папки в ShellBag')}

      <div class="section-title">Если в ShellBag нет данных за 14 дней</div>
      <p>Полное отсутствие данных — само по себе подозрительно. Проверяем дату установки Windows:</p>
      <ul class="plain-list">
        <li>Нажимаем <code>Win+R → cmd → Enter</code>.</li>
        <li>Вводим <code>systeminfo</code> → Enter.</li>
        <li>Находим строку <strong>«Дата загрузки системы»</strong> или <strong>«Original Install Date»</strong>.</li>
        <li>Дата установки менее 14 дней назад — это переустановка Windows с целью скрыть следы — <span class="ban">бан</span>.</li>
      </ul>
      ${localImg('image108.png', 'Команда systeminfo в CMD')}
      ${localImg('image80.png', 'Результат systeminfo — дата установки')}
    `,
    steps: [
      "Запустить ShellBag Analyzer.",
      "Сортировать по дате модификации.",
      "Искать запрещённые имена папок за последние 14 дней.",
      "Нет данных за 14 дней → cmd → systeminfo → дата установки Windows.",
      "Установка Windows менее 14 дней назад = бан.",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 08  RECENTFILEVIEW
  // ══════════════════════════════════════════════════════════
  {
    title: "RecentFileView",
    intro: "RecentFileView показывает файлы, которые недавно открывались на компьютере. Данные берутся из нескольких источников: MRU-списки реестра, папка Recent, Jump Lists. Особенно полезна когда файл уже удалён, но в истории остался след его запуска.",
    content: `
      ${localImg('image7.png', 'Внешний вид RecentFileView')}
      <ul class="plain-list">
        <li>Сортируем по колонке <strong>Execute Time</strong> — время последнего запуска.</li>
        <li>Просматриваем все .exe и .jar за последние 14 дней.</li>
        <li>Кликаем на каждый подозрительный файл — если он существует, пробуем открыть двойным кликом.</li>
        <li>Открылся лоудер чита или DoomsDay — <span class="ban">бан</span>.</li>
        <li>Файл уже удалён — переходим в Journal Trace и ищем его там по имени и дате.</li>
      </ul>
      <p>Особое внимание на файлы из нестандартных путей (Temp, AppData\Roaming), файлы со случайными именами и файлы, запускавшиеся в период игровой сессии.</p>
    `,
    steps: [
      "Запустить RecentFileView.",
      "Сортировать по Execute Time.",
      "Просмотреть каждый .exe и .jar за 14 дней.",
      "Открыть подозрительные файлы — лоудер = бан.",
      "Удалённые файлы — искать в Journal Trace.",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 09  EXECUTEDPROGRAMSLIST
  // ══════════════════════════════════════════════════════════
  {
    title: "ExecutedProgramsList",
    intro: "ExecutedProgramsList собирает данные о запускавшихся программах из нескольких источников: Windows Prefetch, UserAssist из реестра, AppCompatCache. Это даёт более широкую картину, чем BamParser — включает программы, которые могут отсутствовать в BAM.",
    content: `
      ${localImg('image61.png', 'Внешний вид ExecutedProgramsList')}
      <ul class="plain-list">
        <li>Запускаем программу, ждём загрузки.</li>
        <li>Дважды кликаем по заголовку колонки <strong>Last Executed On</strong> — сортировка по дате запуска (свежие сверху).</li>
      </ul>
      ${localImg('image85.png', 'Сортировка по дате запуска')}

      <ul class="plain-list">
        <li><code>Ctrl+F</code> — ищем по именам читов.</li>
        <li>В поиск вводим <code>downloads</code> — запуски из папки Загрузки. Подозрительный .exe — открываем.</li>
        <li>В поиск вводим <code>Desktop</code> или <code>Рабочий стол</code> — аналогично для рабочего стола.</li>
        <li>Смотрим колонки <strong>Product Name</strong> и <strong>Company Name</strong>. У легитимных программ они заполнены. Если у недавно запущенного файла они пустые — это подозрительно, стоит найти файл и проверить его.</li>
      </ul>
      ${localImg('image42.png', 'Пример пустых Product Name и Company Name')}
    `,
    steps: [
      "Запустить ExecutedProgramsList.",
      "Двойной клик по Last Executed On — сортировка по дате.",
      "Ctrl+F — поиск по именам читов.",
      "Поиск по 'downloads' и 'Desktop' — запуски из этих папок.",
      "Пустые Product/Company Name у свежего файла — проверить.",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 10  USBDEVIEW + SYSTEM INFORMER DISK DEVICES
  // ══════════════════════════════════════════════════════════
  {
    title: "UsbDeview + System Informer",
    intro: "UsbDeview показывает полную историю всех USB-устройств, подключавшихся к компьютеру. System Informer в режиме Disk Devices позволяет узнать точное время последнего подключения и отключения каждой флешки.",
    content: `
      <ul class="link-list">
        <li><span>UsbDeview</span><a href="https://www.nirsoft.net/utils/usb_devices_view.html" target="_blank" rel="noopener">Скачать ↗</a></li>
        <li><span>UsbDriveLog</span><a href="https://www.nirsoft.net/utils/usbdrivelog.zip" target="_blank" rel="noopener">Скачать ↗</a></li>
        <li><span>System Informer</span><a href="https://systeminformer.com/downloads.php" target="_blank" rel="noopener">Скачать ↗</a></li>
      </ul>

      <div class="section-title">UsbDeview</div>
      ${localImg('image67.png', 'UsbDeview — история USB-устройств')}
      <ul class="plain-list">
        <li>Запускаем, сортируем по колонке <strong>Registry Time 1</strong>.</li>
        <li>Смотрим дату последнего подключения каждого устройства.</li>
        <li>Флешка подключалась <strong>после начала проверки</strong> — <span class="ban">бан</span>. Игрок пытался что-то передать или скрыть через USB.</li>
      </ul>

      <div class="section-title">System Informer — Disk Devices</div>
      ${localImg('image114.png', 'System Informer — Disk Devices')}
      <ul class="plain-list">
        <li>System → Options… → Disk Devices.</li>
        <li>Кликаем на каждую флешку из списка → вкладка <strong>Сведения</strong> → стрелочка справа от «Описание устройства».</li>
        <li>Ищем строку <strong>«Дата последнего удаления»</strong> — это время физического отключения устройства.</li>
        <li>Дата <strong>после начала проверки</strong> или за <strong>1–2 минуты до начала</strong> — <span class="ban">бан</span>.</li>
      </ul>
    `,
    steps: [
      "Запустить UsbDeview, сортировать по Registry Time 1.",
      "Флешка подключалась после начала проверки = бан.",
      "System Informer → System → Options → Disk Devices.",
      "Кликнуть на каждую флешку → Сведения → Дата последнего удаления.",
      "Время после или за 1–2 мин до начала проверки = бан.",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 11  RECAF + HOLYCHECK + GPT
  // ══════════════════════════════════════════════════════════
  {
    title: "Recaf + HolyCheck + ИИ",
    intro: "HolyCheck — онлайн-платформа для быстрой проверки модов. Recaf — Java-декомпилятор для изучения байткода .jar файлов. В паре с нейросетью (DeepSeek) они позволяют найти запрещённый функционал даже в обфусцированных или неизвестных модах.",
    content: `
      <ul class="link-list">
        <li><span>Recaf</span><a href="https://sourceforge.net/projects/recaf.mirror/files/latest/download" target="_blank" rel="noopener">Скачать ↗</a></li>
        <li><span>HolyCheck — проверка модов</span><a href="https://mods.holyworld.me/mods/check" target="_blank" rel="noopener">Открыть ↗</a></li>
        <li><span>anticheat.ac/strings — строки читов</span><a href="https://anticheat.ac/strings/" target="_blank" rel="noopener">Открыть ↗</a></li>
        <li><span>DeepSeek — нейросеть для анализа</span><a href="https://chat.deepseek.com/" target="_blank" rel="noopener">Открыть ↗</a></li>
      </ul>

      <div class="section-title">Алгоритм проверки модов</div>
      ${localImg('image77.png', 'HolyCheck — загрузка модов')}

      <ul class="plain-list">
        <li><strong>Шаг 1.</strong> Скидываем все моды игрока на HolyCheck. Результат «чит» — <span class="ban">баним</span>. <em>Исключение:</em> некоторые моды запрещены на HolyWorld, но разрешены у нас — например crystal optimizer, target hud. В таком случае скачиваем мод с официального сайта и сравниваем вес. Совпадает — пропускаем.</li>
        <li><strong>Шаг 2.</strong> Файл «чистый» — пропускаем. Файл «неизвестный» или помечен как «спам» (например keystrokes от LabyMod) — идём дальше.</li>
        <li><strong>Шаг 3.</strong> Неизвестный файл загружаем на <a href="https://anticheat.ac/strings/" target="_blank">anticheat.ac/strings/</a>. Нашло что-то — <span class="ban">бан</span>.</li>
        <li><strong>Шаг 4.</strong> Ничего не нашло — открываем в Recaf. Смотрим классы на запрещённые строки: hitboxlimit, reach, size 0.5, bind (E). Мод обфусцирован (jjjjjjaauiuqk — нечитаемый набор символов) — <span class="ban">бан</span>. Обфусцированные моды запрещены.</li>
        <li><strong>Шаг 5.</strong> Копируем классы (особенно mixin) в DeepSeek с вопросом: «есть ли в этом коде запрещённый функционал для Minecraft?» — нейросеть подробно разберёт код.</li>
      </ul>

      ${localImg('image14.png', 'Recaf — структура .jar файла')}
      ${localImg('image79.png', 'Recaf — пример подозрительного mixin')}

      <div class="section-title">Что искать в Recaf — по типу лоудера</div>

      <p><strong>Fabric:</strong></p>
      <ul class="plain-list">
        <li><code>method_5857</code> — это <em>setBoundingBox</em> (изменение хитбокса)</li>
        <li><code>class_239</code> — это <em>HitResult</em> (обработка попаданий, autoattack)</li>
        <li><code>class_1799</code> — это <em>ItemStack</em> (свапп предметов)</li>
      </ul>

      <p><strong>Forge:</strong></p>
      <ul class="plain-list">
        <li><code>func_174826_a</code> — это <em>setBoundingBox</em></li>
        <li><code>RayTraceResult</code>, <code>EntityRayTraceResult</code> — autoattack</li>
        <li><code>ItemStack</code> — свапп</li>
      </ul>

      <p><strong>LabyMod 3:</strong></p>
      <ul class="plain-list">
        <li>Метод <code>a</code> в классе <code>dci</code> — это <em>setBoundingBox/AxisAlignedBB</em></li>
        <li>Классы <code>dcl</code> и <code>dck</code> — это <em>RayTraceResult</em> и <em>EntityRayTraceResult</em></li>
        <li>Класс <code>bmb</code> — это <em>ItemStack</em></li>
      </ul>

      ${localImg('image50.png', 'Mixin хитбоксов (Fabric)')}
      ${localImg('image86.png', 'Event хитбоксов (Forge)')}

      <div class="section-title">XRay с изменённым названием</div>
      <p>Открываем архив ресурспака → <strong>assets → minecraft → models → block</strong>. Видим файлы с именем XRay — <span class="ban">бан</span>. В .json файлах ищем строку <code>"Copyright 2018 Filmjolk David Grindholmen"</code> — сигнатура известного XRay пака.</p>
      ${localImg('image84.png', 'Структура XRay ресурспака')}

      <div class="section-title">Анализ через нейросеть (DeepSeek)</div>
      ${localImg('image99.png', 'DeepSeek — анализ кода')}
      <ul class="plain-list">
        <li><strong>.jar файлы:</strong> открываем в Recaf, копируем mixin-классы → вставляем в DeepSeek с вопросом «есть ли запрещённый функционал для Minecraft?»</li>
        <li><strong>.dll файлы:</strong> открываем в блокноте, копируем 30–50% кода → вставляем в DeepSeek с тем же вопросом.</li>
      </ul>
    `,
    steps: [
      "Скинуть все моды на HolyCheck.",
      "Неизвестные → anticheat.ac/strings.",
      "Ничего не нашло → открыть в Recaf.",
      "Искать: setBoundingBox, HitResult, обфускацию.",
      "Скопировать mixin-классы в DeepSeek для анализа.",
      "XRay пак → assets/minecraft/models/block → сигнатура.",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 12  JOURNAL TRACE
  // ══════════════════════════════════════════════════════════
  {
    title: "Journal Trace",
    intro: "Journal Trace анализирует USN Journal (Update Sequence Number Journal) — низкоуровневый журнал файловой системы NTFS, который фиксирует абсолютно все операции с файлами: создание, изменение, переименование, удаление. Его нельзя очистить без специальных команд и прав администратора.",
    content: `
      ${localImg('image37.png', 'Внешний вид Journal Trace')}

      ${callout('danger', '⚠️ Критично', 'Journal Trace обязательно должен находиться на ТОМ ЖЕ диске, который сканирует. Если Minecraft на диске C — Journal Trace тоже должен лежать на C.')}

      <p><strong>Запуск:</strong> открываем → <strong>drive → выбираем нужный диск (C или D) → Select → Scan → Layout → Data Grid</strong>.</p>

      <div class="section-title">Строка 1 — Все операции в папке игрока</div>
      <p>Подставляем реальный путь к папке .minecraft (например: <code>C:\Users\Username\AppData\Roaming\.minecraft</code>).</p>
      ${codeBlock(`directory:путь_к_папке;name:!!.`)}
      ${localImg('image19.png', 'Результат строки 1')}
      <p>Сортируем по Date. Ищем удаления файлов. Удаление <strong>после начала проверки</strong> — <span class="ban">бан</span>.</p>

      <div class="section-title">Строка 2 — config, mods, logs, addons</div>
      ${codeBlock(`directory:путь_к_папке;directory:config||mods||logs||addons`)}
      ${localImg('image34.png', 'Операции в config/mods/logs')}
      <ul class="plain-list">
        <li>Логи могут самоудаляться и перезаписываться — это нормально.</li>
        <li>Если логи были вручную очищены (удалён весь контент папки logs разом) — <span class="ban">бан</span>.</li>
        <li>Запрещённые имена файлов в mods или config — <span class="ban">бан</span>.</li>
      </ul>

      <div class="section-title">Строка 3 — .jar, .zip, .rar на всех дисках</div>
      <p>Вставляем для каждого диска отдельно. Journal Trace должен лежать на соответствующем диске.</p>
      ${codeBlock(`directory::;name:.jar||.zip||.rar;name:!!.lnk`)}
      ${localImg('image46.png', 'Поиск jar/zip/rar')}
      <ul class="plain-list">
        <li>Удаление после начала проверки — <span class="ban">бан</span>.</li>
        <li>Запрещённые имена в любых операциях — <span class="ban">бан</span>.</li>
      </ul>

      <div class="section-title">Строка 4 — Загрузки и Рабочий стол</div>
      ${codeBlock(`directory:Downloads||Desktop`)}
      ${localImg('image8.png', 'Downloads и Desktop в Journal Trace')}
      ${localImg('image101.png', 'Пример удаления из загрузок')}
      ${localImg('image83.png', 'Запрещённое имя файла')}
      ${localImg('image29.png', 'Итоговый вид с несколькими уликами')}
      <ul class="plain-list">
        <li>Удаление после начала проверки — <span class="ban">бан</span>.</li>
        <li>Запрещённые имена — <span class="ban">бан</span>.</li>
      </ul>
    `,
    steps: [
      "Journal Trace положить на ТОТ ЖЕ диск что и Minecraft.",
      "drive → нужный диск → Select → Scan → Layout → Data Grid.",
      "Строка 1 — все операции в папке игрока, сортировать по Date.",
      "Строка 2 — config/mods/logs — ручная чистка логов = бан.",
      "Строка 3 — .jar/.zip/.rar на каждом диске отдельно.",
      "Строка 4 — Downloads/Desktop — удаления и запрещённые имена.",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 13  SIMPLE UNLOCKER
  // ══════════════════════════════════════════════════════════
  {
    title: "Simple Unlocker",
    intro: "Simple Unlocker позволяет обнаружить и снять блокировку с файлов, которые удерживаются активными процессами Windows. Инжект-читы часто держат свои dll-файлы заблокированными, не давая их открыть или скопировать стандартными средствами.",
    content: `
      ${localImg('image44.png', 'Внешний вид Simple Unlocker')}
      <ul class="plain-list">
        <li>Скачиваем и запускаем Simple Unlocker у игрока <strong>от имени администратора</strong>.</li>
        <li>Нажимаем <strong>Разблокировка ограничений → Начать сканирование</strong>.</li>
        <li>Программа покажет файлы с активными дебаггерными ограничениями или удерживаемые процессами.</li>
        <li>Перед снятием блокировки находим файл в Everything — запоминаем путь.</li>
        <li>Снимаем ограничение и пробуем открыть файл двойным кликом.</li>
        <li>Открылся лоудер чита или клинер — <span class="ban">бан</span>.</li>
        <li>Если файл не открывается даже после разблокировки — закидываем на <a href="https://anticheat.ac/strings/" target="_blank">anticheat.ac/strings/</a>.</li>
      </ul>
    `,
    steps: [
      "Скачать Simple Unlocker игроку, запустить от администратора.",
      "Разблокировка ограничений → Начать сканирование.",
      "Найти подозрительный файл в Everything.",
      "Снять ограничение через Simple Unlocker.",
      "Открыть файл — лоудер = бан.",
      "Не открывается — закинуть на anticheat.ac/strings.",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 14  EVENTVWR
  // ══════════════════════════════════════════════════════════
  {
    title: "Eventvwr",
    intro: "Eventvwr (Просмотр событий Windows) — встроенный системный инструмент. В контексте проверки на читы используется как вспомогательный инструмент для поиска логов, связанных с удалением .exe файлов.",
    content: `
      ${localImg('image60.png', 'Eventvwr — просмотр событий')}

      <p><strong>Запуск:</strong> <code>Win+R → eventvwr → Enter</code>.</p>

      <p>Если в журнале есть записи с процессом <code>fsutil.exe</code> — это логи, связанные с операциями над .exe файлами. По этим записям можно ориентироваться, что именно удалялось.</p>

      ${callout('warn', '⚠️ Важно', 'Дата в этих записях может быть некорректной — на 10 дней меньше реальной. Наличие записей fsutil.exe абсолютно нормально для любого компьютера. <strong>Только за это нельзя банить</strong> — используйте как вспомогательную подсказку для дальнейшего расследования через Journal Trace.')}

      ${localImg('image76.png', 'Поиск записей с fsutil.exe')}
      ${localImg('image4.png', 'Пример записи')}
      ${localImg('image106.png', 'Детали записи')}
    `,
    steps: [
      "Win+R → eventvwr → Enter.",
      "Искать события с процессом fsutil.exe.",
      "Использовать только как вспомогательную информацию.",
      "Найденные пути к удалённым файлам — проверять в Journal Trace и BamParser.",
      "Только за наличие этих записей не банить.",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 15  REGSCANNER
  // ══════════════════════════════════════════════════════════
  {
    title: "RegScanner",
    intro: "RegScanner — быстрый поиск по всему реестру Windows. В контексте проверки на читы используется для обнаружения следов открытия .dll файлов через системный диалог — что может указывать на инжект.",
    content: `
      ${localImg('image90.png', 'Настройки RegScanner')}

      <p>После запуска ждём полной загрузки реестра. Ищем только две конкретные записи:</p>

      <p><strong>Запись 1 — MRU список .dll:</strong></p>
      <ul class="plain-list">
        <li>Registry Key: <code>Software\Microsoft\Windows\CurrentVersion\Explorer\RecentDocs\\.dll</code></li>
        <li>Name: <code>MRUListEx</code></li>
        <li>Key Modified Time: дата менее 14 дней назад</li>
      </ul>

      <p><strong>Запись 2 — История диалога открытия .dll:</strong></p>
      <ul class="plain-list">
        <li>Registry Key: <code>Software\Microsoft\Windows\CurrentVersion\Explorer\ComDlg32\OpenSavePidlMRU\\.dll</code></li>
        <li>Name: <code>MRUListEx</code></li>
        <li>Key Modified Time: дата менее 14 дней назад</li>
      </ul>

      ${localImg('image55.png', 'Найденная запись .dll в реестре')}

      <p><strong>Что делать, если нашли:</strong></p>
      <ul class="plain-list">
        <li>Открываем LastActivityView и смотрим действия игрока в это время.</li>
        <li>Незадолго до этой даты запускался инжектор (System Informer, Process Hacker 2, Extreme Injector) — <span class="ban">бан</span>.</li>
        <li>Инжектор не запускался или дата старше 14 дней — скачиваем найденный .dll на свой ПК и проверяем через <a href="https://anticheat.ac/strings/" target="_blank">anticheat.ac/strings/</a>.</li>
        <li>В причине бана указать: <strong>«инжект dll»</strong> или <strong>«запрет dll»</strong>.</li>
      </ul>
    `,
    steps: [
      "Запустить RegScanner, дождаться загрузки реестра.",
      "Найти запись RecentDocs\\.dll с MRUListEx за 14 дней.",
      "Найти запись ComDlg32\\OpenSavePidlMRU\\.dll с MRUListEx за 14 дней.",
      "Открыть LastActivityView — был ли запущен инжектор в это время?",
      "Инжектор + дата = бан. Нет — проверить dll на strings.",
      "Причина бана: 'инжект dll' / 'запрет dll'.",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 16  POWERSHELL
  // ══════════════════════════════════════════════════════════
  {
    title: "PowerShell",
    intro: "PowerShell используется для запуска чекера, проверки состояния критических служб, анализа истории команд и проверки доступности античит-сайтов. Некоторые читы и клинеры отключают системные службы для снижения вероятности обнаружения.",
    content: `
      ${localImg('image64.png', 'PowerShell запущен от администратора')}

      ${callout('info', '📌 Запуск', 'PowerShell запускать строго от имени администратора. Без прав администратора часть проверок не сработает.')}

      <div class="section-title">Проверка системных служб</div>
      <p>После запуска чекера смотрим на состояние критических служб:</p>
      <ul class="plain-list">
        <li><strong>Sysmain</strong> — служба Superfetch. Выключена = <span class="ban">бан на 7 дней</span>.</li>
        <li><strong>EventLog</strong> — журнал событий Windows. Выключена = <span class="ban">бан на 7 дней</span>.</li>
        <li><strong>Dcomlaunch</strong> — базовая COM-служба. Выключена = <span class="ban">бан на 7 дней</span>.</li>
      </ul>
      <p>Чистка Journal Trace (наличие <code>fsutil.exe</code> в чекере) = <span class="ban">бан на 14 дней</span>.</p>

      ${localImg('image53.png', 'Результат чекера — службы')}

      <div class="section-title">История команд PowerShell</div>
      <ul class="plain-list">
        <li><code>Win+R → shell:recent → Enter</code>.</li>
        <li>Переходим: <strong>windows → powershell → PSReadLine</strong>.</li>
        <li>Открываем .txt файл — это история всех введённых команд PowerShell.</li>
        <li>Ищем подозрительные команды: удаление журналов, работа с реестром, скачивание файлов.</li>
      </ul>
      ${localImg('image92.png', 'Папка PSReadLine — история команд')}

      <div class="section-title">Проверка доступности сайтов</div>
      <p>Некоторые читы блокируют античит-сайты через hosts файл, DNS или фаервол. Скрипт ниже проверяет все способы блокировки. Вставить в PowerShell от администратора:</p>
      ${codeBlock(`$sites="fluddy.com","anticheat.ac","mods.holyworld.me","github.com","voidtools.com","privazer.com","nirsoft.net","sourceforge.net","download.ericzimmermanstools.com","win-rar.com","simpleunlocker.ds1nc.ru"; function Test-Site($u){ $r=@(); if(Select-String -Path "$env:SystemRoot\\System32\\drivers\\etc\\hosts" -Pattern "(?mi)^\\s*?\\d.+?$($u.Replace('.','\\.'))\\s*$"){$r+="HOSTS"}; try{if((Resolve-DnsName $u -ErrorAction Stop -Type A|% IPAddress)-like'127.*'){$r+="DNS_LOOPBACK"}}catch{}; $regPath="HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings\\ZoneMap\\Domains\\$($u.Replace('.','\\'))";if(Test-Path $regPath){$r+="REGISTRY_ZONE"}; if(Get-NetFirewallRule|?{$_.DisplayName-like"*$u*"-and$_.Action-eq"Block"}){$r+="FIREWALL"}; try{iwr "https://$u"-TimeoutSec 5 -UseBasicParsing -DisableKeepAlive -ErrorAction Stop|Out-Null}catch{if($_.Exception.Response.StatusCode-eq407){$r+="PROXY_BLOCK"}elseif(-not$_.Exception.Response){try{iwr "http://$u"-TimeoutSec 3 -UseBasicParsing -DisableKeepAlive -ErrorAction Stop|Out-Null}catch{$r+="WEB_BLOCKED"}}}; if($r.Count-gt0){"$u → БЛОКИРОВКА: $($r-join', ')"}else{"$u → OK"}}; $sites|%{Test-Site $_}`)}
      ${localImg('image31.png', 'Результат проверки сайтов')}
    `,
    steps: [
      "PowerShell запустить от имени администратора.",
      "Запустить чекер — проверить службы Sysmain, EventLog, Dcomlaunch.",
      "Win+R → shell:recent → windows → powershell → PSReadLine → .txt.",
      "Просмотреть историю команд.",
      "Вставить скрипт проверки доступности сайтов.",
      "Выключенные службы = бан на 7 дней. Чистка JT = бан 14 дней.",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 17  SYSTEM INFORMER
  // ══════════════════════════════════════════════════════════
  {
    title: "System Informer",
    intro: "System Informer (бывший Process Hacker) — продвинутый диспетчер задач с глубоким доступом к системе. Позволяет анализировать память процессов, выгруженные модули, сетевые соединения и многое другое. Один из ключевых инструментов для обнаружения активных инжект-читов.",
    content: `
      ${localImg('image103.png', 'System Informer — главное окно')}

      <div class="section-title">Начальная настройка</div>
      <ul class="plain-list">
        <li>System → Options → General → <strong>Enable kernel-mode driver</strong> → поставить галочку → согласиться с перезагрузкой System Informer.</li>
        <li>Вылезла ошибка — игнорируем, kernel mode всё равно включается.</li>
      </ul>
      ${localImg('image72.png', 'Включение kernel-mode driver')}

      <div class="section-title">Проверка Network</div>
      <ul class="plain-list">
        <li><code>Ctrl+K</code> → вводим <code>javaw.exe</code> → вкладка <strong>Network</strong>.</li>
        <li>Remote Address <strong>192.168.x.x</strong> — <span class="ban">бан</span> (признак локального прокси-чита).</li>
      </ul>
      ${localImg('image66.png', 'javaw.exe — вкладка Network')}

      <div class="section-title">Unloaded Modules — выгруженные dll</div>
      <p>ПКМ по javaw.exe → Miscellaneous → Unloaded Modules. Это dll, которые были загружены в процесс и затем выгружены — инжекторы оставляют следы именно здесь.</p>

      <table class="ref-table">
        <thead><tr><th>Размер</th><th>Что это</th></tr></thead>
        <tbody>
          <tr><td>1.42 mb</td><td>Хитбоксы (проверять — может ложно)</td></tr>
          <tr><td>1.43 mb (1525 kb)</td><td>dauntiblyat.dll / potato dll</td></tr>
          <tr><td>1.52 mb</td><td>Хитбоксы</td></tr>
          <tr><td>1.54 mb</td><td>Хитбоксы</td></tr>
          <tr><td>1.6 mb (1647 kb)</td><td>systemly dll (no name)</td></tr>
          <tr><td>2.2 mb (2221 kb)</td><td>leaf Huina</td></tr>
          <tr><td>3.7 mb (3734 kb)</td><td>pandora dll</td></tr>
          <tr><td>4.7–4.8 mb</td><td>trigger bot dll</td></tr>
          <tr><td>5.42 mb (5510 kb)</td><td>DoomsDay dll</td></tr>
          <tr><td>9.6–9.7 mb (9643 kb)</td><td>akimus dll</td></tr>
          <tr><td>11.5 mb (11492 kb)</td><td>fallen client</td></tr>
          <tr><td>27.85–27.86 mb</td><td>system dll (hitbox / no name)</td></tr>
          <tr><td>114 kb</td><td>blessed client.dll</td></tr>
          <tr><td>801–836 kb</td><td>drive86.dll (no name)</td></tr>
        </tbody>
      </table>
      <p>Веса могут отличаться на 3–5%. Все подозрительные dll ищем в Everything → копируем на свой ПК → проверяем через <a href="https://anticheat.ac/strings/" target="_blank">anticheat.ac/strings/</a>.</p>
      ${localImg('image71.png', 'Unloaded Modules')}

      <div class="section-title">DPS — поиск через Memory Strings</div>
      <p>В поиске пишем <strong>DPS</strong> → Services → go to process → двойной клик → Memory → Options (убрать все галочки) → Strings (значение 4, все галочки кроме extended unicode).</p>
      ${codeBlock(`^!![A-Z]((?!Exe).)*$`)}
      <p>Показывает изменённое состояние в службе DPS. Найденное — ищем в Everything / Journal Trace.</p>
      ${codeBlock(`!0!`)}
      <p>Показывает недавно запущенные программы. Подозрительное имя — ищем в Everything.</p>
      ${localImg('image59.png', 'DPS Memory Strings')}
      ${localImg('image49.png', 'Результаты поиска в DPS')}

      <div class="section-title">dcomlaunch — поиск .jar</div>
      <p>В поиске пишем <strong>dcomlaunch</strong> → Services → go to process → Memory → Strings (значение 4, без extended unicode) → в filter container пишем <code>-jar</code>.</p>
      ${localImg('image96.png', 'dcomlaunch — поиск -jar')}
      <p>Смотрим имя найденного .jar — ищем в Everything → запускаем → открылся чит = <span class="ban">бан</span>.</p>

      <div class="section-title">javaw.exe — полный regex поиск строк в памяти</div>
      <p>Двойной клик по javaw.exe → Memory → убрать все галочки → Strings (значение 4, все кроме extended unicode) → вставляем в поле contains (regex, case-insensitive):</p>
      ${codeBlock(`(?i)(4aNT>jeSE@I"KE\\)PQ07|prlgQZGLbPCtCOg|dreampool|TriggerBOT|forge\\.commons\\.|ZDCoder|radioegor146|chs/Main|chs/Profiller|areyoufuckingdump|vape\\.gg|www\\.vape\\.gg|VAPE4DLL|CREATED_BY_WHYMADUD|oeshb|h1tb0x|ch0ffa_box|onupdate|tickupdate|BreakHitsOn|waoHITBOXES|chs/|HRCRHIIIq|RHOOOCCC5\\.e|listSpritesure|Zero/Time|GetDiskId|afefefeffe|\\.crlc\\)|\\(ITK;J\\)V|ClickPearl|Noise\\sClient|stubborn\\.website|xameleon\\.html|x/mo/c|E\\sS\\sP|EEEFFFHHHHJJJJM|NNNNNNNNN\\{\\{\\{\\{\\{|3333NNNNgigg|kkkyik\\^\\^ZkBBB2221KKYHYeYVY|Hitbox:|Reach:|b/time|BaoBab:|magicthein|radioegor146|net\\.minecraftforge\\.ASMEventHandler\\.31\\.wait|org/springframework/boot/loader|net/lenni0451/commons/httpclient)`)}
      ${localImg('image38.png', 'javaw.exe Memory Strings')}
      ${localImg('image24.png', 'Пример срабатывания — Vape V4')}
      ${localImg('image65.png', 'Пример срабатывания — DoomsDay')}
      ${localImg('image56.png', 'Пример срабатывания — Blessed')}
      ${localImg('image100.png', 'Итоговый вид с несколькими совпадениями')}
    `,
    steps: [
      "Enable kernel-mode driver → перезагрузить System Informer.",
      "Ctrl+K → javaw.exe → Network → 192.168.x.x = бан.",
      "ПКМ → Unloaded Modules → веса dll по таблице.",
      "Подозрительные dll → Everything → anticheat.ac/strings.",
      "DPS: Memory → Strings → два regex запроса.",
      "dcomlaunch: Memory → Strings → filter '-jar'.",
      "javaw.exe: Memory → Strings → полный regex список.",
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 18  ТАБЛИЦА DLL, JAR
  // ══════════════════════════════════════════════════════════
  {
    title: "Таблица dll & jar",
    intro: "Полная справочная таблица известных читов, хитбоксов и запрещённых файлов с указанием веса и метода обнаружения. Используйте как шпаргалку при анализе подозрительных файлов в других инструментах. Веса приблизительны — допустимо расхождение до 3–5%.",
    content: `
      <table class="ref-table">
        <thead><tr><th>Файл / Чит</th><th>Вес</th><th>Метод обнаружения</th></tr></thead>
        <tbody>
          <tr><td>Vape V4</td><td>11 210 / 12 000 кб</td><td>Ocean / Appinfo / EchoScanner / Strings javaw.exe / DPS</td></tr>
          <tr><td>Vape V3</td><td>3 614 кб</td><td>Ocean / Strings javaw.exe / DPS / Pca</td></tr>
          <tr><td>Vape V2</td><td>3 678 кб</td><td>Уже не работает</td></tr>
          <tr><td>DoomsDay (dll)</td><td>5 510 кб</td><td>System Informer / Разбор .dll</td></tr>
          <tr><td>DoomsDay (jar)</td><td>29 000 – 30 000 кб</td><td>Strings PH / SS / WinRar по логотипу / Ocean / dcomlaunch</td></tr>
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
          <tr><td>vec.dll</td><td>30 кб (может быть другим)</td><td>System Informer / Разбор .dll — часто встречается</td></tr>
          <tr><td>Avalone Red</td><td>824 кб / 21 764 кб</td><td>Ocean / DPS / Conhost / PcaClient</td></tr>
          <tr><td>Avalone Green</td><td>987 / 726 / 1 600 кб</td><td>Ocean / DPS / Conhost / PcaClient</td></tr>
          <tr><td>Avalone Blue</td><td>765 кб</td><td>Ocean / DPS / Conhost / PcaClient</td></tr>
          <tr><td>Virgin Client (Ghost)</td><td>1.7–1.9 МБ</td><td>net/smoothboot/client/module/combat</td></tr>
          <tr><td>ThunderHack</td><td>5 847 кб</td><td>thunder/hack</td></tr>
          <tr><td>Troxill Crack</td><td>167 кб</td><td>ru/zdcoder/troxill/modules</td></tr>
          <tr><td>Troxill Crack (dll)</td><td>1 457 кб</td><td>System Informer / Разбор .dll</td></tr>
          <tr><td>NeverHook Legit</td><td>2 486 кб</td><td>System Informer / Разбор .dll</td></tr>
          <tr><td>Undetectable</td><td>1523–1756 кб (разные)</td><td>System Informer / Разбор .dll</td></tr>
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
          <tr><td>PseudoAutoSprint</td><td>56.1 кб</td><td>dvd/explorer/nocheat/client/impl/ghost</td></tr>
          <tr><td>Ghost-клиент</td><td>149 кб</td><td>eu/me, MainClass.class</td></tr>
          <tr><td>Ghost-клиент (BetterFps)</td><td>97 кб</td><td>net/client/ExampleMod.class</td></tr>
          <tr><td>Ghost-клиент (TopkaHealth)</td><td>66 кб</td><td>ev/service/use/Bypass.class</td></tr>
          <tr><td>Ghost-клиент (MarlowsCrystal)</td><td>73 кб</td><td>com/kapiteon/freecam</td></tr>
          <tr><td>ChanLibs (Ghost)</td><td>~613 кб</td><td>org/chainlibs/module/impl/modules</td></tr>
          <tr><td>Rolleron GH</td><td>30–43 кб</td><td>me/rolleron/launchThis.class</td></tr>
          <tr><td>FpsBoost GH</td><td>36 кб</td><td>com/shaori/fpsboost</td></tr>
          <tr><td>FabricHits</td><td>11 кб</td><td>net/fabricmc/example/ExampleMod.class</td></tr>
          <tr><td>Hitboxs Neat</td><td>19 / 28 / 34 / 71 / 188 / 1411 кб</td><td>vazkii/neat — нет HealthBarRenderer.class</td></tr>
          <tr><td>Hitboxs Creative Core</td><td>99–104 кб</td><td>creativecore/Start.class — часто</td></tr>
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
          <tr><td>ALLATORI hb</td><td>7 кб</td><td>ALLATORI — набор букв .class</td></tr>
          <tr><td>Безымянный dll</td><td>1 525 кб</td><td>System Informer / Разбор .dll</td></tr>
          <tr><td>Безымянный dll</td><td>1 397 кб</td><td>System Informer / Разбор .dll</td></tr>
          <tr><td>Безымянный dll</td><td>13 591 кб</td><td>System Informer</td></tr>
        </tbody>
      </table>
    `,
    steps: [
      "Использовать как справочник при анализе подозрительных файлов.",
      "Сверять вес и метод с результатами других инструментов.",
      "При любом совпадении — проверять через anticheat.ac/strings.",
      "Пополнять таблицу по мере нахождения новых читов.",
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
      <span class="nav-label">${p.title.trim()}</span>
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
      <div class="chapter-header">
        <div class="chapter-num">${p.num}</div>
        <div class="chapter-tag">${p.tag}</div>
        <h1>${p.title}</h1>
        <p class="page-intro">${p.intro}</p>
      </div>

      <div class="section-title">Содержание</div>
      <div class="content-body">${p.content}</div>

      <div class="section-title" style="margin-top:32px">Краткий алгоритм</div>
      <ol class="steps">${stepsHTML}</ol>

      <div class="nav-buttons">${prevBtn}${nextBtn}</div>

      <div class="page-footer">
        <span class="page-footer-copy">© 2025 <strong>iqxpeax</strong> — все права защищены</span>
        <div class="page-footer-links">
          <a href="https://t.me/iqxpeax" target="_blank" rel="noopener">Telegram @iqxpeax</a>
          <a href="#">Discord @iqxpix</a>
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
  document.getElementById('breadcrumbCurrent').textContent = pages[index].title.trim();
  document.getElementById('chapterBadge').textContent      = pages[index].num;
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

// ════════════════════════════════════════════════════════════════════════════
//  INIT
// ════════════════════════════════════════════════════════════════════════════
buildNav();
buildPages();
visitedPages.add(0);
updateProgress();
