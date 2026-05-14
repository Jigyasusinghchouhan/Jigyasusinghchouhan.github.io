import re

with open('/home/jigyasuchauhan/Jigyasusinghchouhan.github.io/index.html', 'r') as f:
    content = f.read()

# Add Dark Mode tailwind config and script to head
head_addition = """
    <script>
        tailwind.config = {
            darkMode: 'class',
        }
        
        function toggleDarkMode() {
            document.documentElement.classList.toggle('dark');
            const isDark = document.documentElement.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        }
        
        if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    </script>
"""
if "tailwind.config" not in content:
    content = content.replace('</head>', head_addition + '\n</head>')

# Add dark mode styles
style_addition = """
        .dark {
            --bg-canvas: #0f172a;
            color: #f8fafc;
        }
        .dark .bg-grid {
            background-image: linear-gradient(to right, rgba(124, 58, 237, 0.1) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(124, 58, 237, 0.1) 1px, transparent 1px);
        }
        .dark .glass-nav {
            background: rgba(15, 23, 42, 0.7);
            border-bottom: 1px solid rgba(30, 41, 59, 0.8);
        }
        .dark .glass-card {
            background: rgba(30, 41, 59, 0.6);
            border: 1px solid rgba(51, 65, 85, 0.8);
        }
        .dark .glass-card:hover {
            background: rgba(30, 41, 59, 0.9);
            border-color: rgba(124, 58, 237, 0.4);
            box-shadow: 0 25px 50px -12px rgba(124, 58, 237, 0.15);
        }
        .dark .metric-card {
            background: #1e293b;
            border-color: #334155;
        }
        .dark .metric-card:hover {
            border-color: #a78bfa;
        }
        .dark .skill-pill {
            background: rgba(30, 41, 59, 0.8);
            border-color: #334155;
            color: #cbd5e1;
        }
        .dark .skill-pill:hover {
            background: linear-gradient(135deg, rgba(124,58,237,0.2) 0%, rgba(217,70,239,0.2) 100%);
            border-color: #a78bfa;
            color: #e9d5ff;
        }
        .dark .diagram-placeholder {
            background: repeating-linear-gradient(45deg, rgba(30,41,59,0.4), rgba(30,41,59,0.4) 10px, rgba(15,23,42,0.4) 10px, rgba(15,23,42,0.4) 20px);
            border-color: #475569;
        }
"""
if ".dark {" not in content:
    content = content.replace('</style>', style_addition + '\n    </style>')

# Replace tailwind utility classes
replacements = {
    'text-slate-900': 'text-slate-900 dark:text-white',
    'text-slate-800': 'text-slate-800 dark:text-slate-100',
    'text-slate-700': 'text-slate-700 dark:text-slate-200',
    'text-slate-600': 'text-slate-600 dark:text-slate-300',
    'text-slate-500': 'text-slate-500 dark:text-slate-400',
    'bg-white': 'bg-white dark:bg-slate-800',
    'bg-slate-100': 'bg-slate-100 dark:bg-slate-800/50',
    'bg-slate-50': 'bg-slate-50 dark:bg-slate-900',
    'border-slate-200': 'border-slate-200 dark:border-slate-700',
    'border-slate-300': 'border-slate-300 dark:border-slate-600',
    'border-violet-100': 'border-violet-100 dark:border-violet-900/50',
}

for old, new in replacements.items():
    content = content.replace(f' {old} ', f' {new} ')
    content = content.replace(f'"{old} ', f'"{new} ')
    content = content.replace(f' {old}"', f' {new}"')

content = content.replace('bg-white/80', 'bg-white/80 dark:bg-slate-800/80')
content = content.replace('bg-white/40', 'bg-white/40 dark:bg-slate-900/60')
content = content.replace('bg-white/60', 'bg-white/60 dark:bg-slate-900/60')
content = content.replace('bg-white/50', 'bg-white/50 dark:bg-slate-800/50')
content = content.replace('hover:bg-white/60', 'hover:bg-white/60 dark:hover:bg-slate-800/60')
content = content.replace('hover:bg-white', 'hover:bg-white dark:hover:bg-slate-800')

# Add dark mode toggle to nav
nav_toggle = """                <a href="mailto:jigyashu2001@gmail.com"
                    class="connect-btn text-white px-5 py-2 rounded-full text-xs font-bold tracking-wide flex items-center gap-2"><i
                        data-lucide="mail" class="w-3.5 h-3.5"></i> Connect</a>
                <button onclick="toggleDarkMode()" class="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors ml-2" aria-label="Toggle Dark Mode">
                    <i data-lucide="moon" class="w-4 h-4 dark:hidden"></i>
                    <i data-lucide="sun" class="w-4 h-4 hidden dark:block"></i>
                </button>"""

if "toggleDarkMode()" not in content:
    content = content.replace("""                <a href="mailto:jigyashu2001@gmail.com"
                    class="connect-btn text-white px-5 py-2 rounded-full text-xs font-bold tracking-wide flex items-center gap-2"><i
                        data-lucide="mail" class="w-3.5 h-3.5"></i> Connect</a>""", nav_toggle)

# Update Resume links globally
content = content.replace('https://drive.google.com/file/d/1S3k8vHTS0z_-tklcF8lTIOASkm7AjKSv/view?usp=sharing', './Jigyasu%20Singh%20Chouhan_2026.pdf')

# Add Terminal Component and Replace Contact Form
terminal_and_contact = """        <!-- Terminal Section -->
        <section class="py-24 relative overflow-hidden">
            <div class="absolute inset-0 bg-slate-900 dark:bg-black z-0 skew-y-3 transform origin-bottom-left scale-110"></div>
            <div class="max-w-4xl mx-auto px-6 md:px-8 relative z-10" data-aos="fade-up">
                <div class="flex items-center gap-4 mb-8">
                    <div class="p-3 bg-emerald-500/20 text-emerald-400 rounded-2xl"><i data-lucide="terminal-square" class="w-8 h-8"></i></div>
                    <h2 class="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Interactive Terminal</h2>
                </div>
                <div class="bg-slate-950 rounded-xl overflow-hidden border border-slate-800 shadow-2xl font-mono text-sm">
                    <!-- Window Controls -->
                    <div class="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-800">
                        <div class="w-3 h-3 rounded-full bg-red-500"></div>
                        <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div class="w-3 h-3 rounded-full bg-green-500"></div>
                        <span class="ml-4 text-slate-500 text-xs">jigyasu@platform-eng:~</span>
                    </div>
                    <!-- Terminal Body -->
                    <div class="p-6 h-[300px] overflow-y-auto" id="terminal-body" onclick="document.getElementById('term-input').focus()">
                        <div class="text-emerald-400 mb-4">Welcome to Jigyasu's Interactive Portfolio Shell v1.0.0<br>Type 'help' to see available commands.</div>
                        <div id="term-output"></div>
                        <div class="flex items-center mt-2">
                            <span class="text-emerald-500 mr-2">jigyasu@platform-eng:~$</span>
                            <input type="text" id="term-input" class="flex-1 bg-transparent border-none outline-none text-slate-300 focus:ring-0 p-0 m-0" autocomplete="off" spellcheck="false">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="py-24">
            <div class="max-w-4xl mx-auto px-6 md:px-8" data-aos="fade-up">
                <div class="text-center mb-16">
                    <div class="w-16 h-16 bg-violet-100 dark:bg-violet-900/50 text-violet-600 dark:text-violet-400 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                        <i data-lucide="mail" class="w-8 h-8"></i>
                    </div>
                    <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">Ready to scale your infrastructure?</h2>
                    <p class="text-xl text-slate-600 dark:text-slate-300">I'm currently open for new opportunities. Let's discuss how I can bring enterprise-grade reliability to your production systems.</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                    <div class="glass-card p-8 rounded-3xl">
                        <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send a Message</h3>
                        <form action="https://formspree.io/f/mqazqjyl" method="POST" class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                                <input type="text" name="name" required class="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:text-white transition-colors">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                                <input type="email" name="email" required class="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:text-white transition-colors">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                                <textarea name="message" rows="4" required class="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:text-white resize-none transition-colors"></textarea>
                            </div>
                            <button type="submit" class="w-full connect-btn text-white px-6 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 group">
                                <i data-lucide="send" class="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"></i> Send Message
                            </button>
                        </form>
                    </div>
                    <div class="flex flex-col justify-center space-y-8 pl-0 md:pl-8">
                        <div>
                            <h4 class="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2"><i data-lucide="mail" class="w-5 h-5 text-violet-500"></i> Direct Email</h4>
                            <a href="mailto:jigyashu2001@gmail.com" class="text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 font-medium">jigyashu2001@gmail.com</a>
                        </div>
                        <div>
                            <h4 class="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2"><i data-lucide="map-pin" class="w-5 h-5 text-violet-500"></i> Location</h4>
                            <p class="text-slate-600 dark:text-slate-400 font-medium">Pune, India (Available for Remote)</p>
                        </div>
                        <div>
                            <h4 class="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2"><i data-lucide="file-text" class="w-5 h-5 text-violet-500"></i> Resume</h4>
                            <a href="./Jigyasu%20Singh%20Chouhan_2026.pdf" target="_blank" class="inline-flex px-6 py-3 rounded-xl text-sm font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm items-center gap-2 group">
                                <i data-lucide="download" class="w-4 h-4 group-hover:translate-y-1 transition-transform"></i>
                                Download PDF
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>"""

# Find the old contact section and replace it
contact_pattern = re.compile(r'<!-- Contact Section -->.*?</section>', re.DOTALL)
if "Interactive Terminal" not in content:
    content = re.sub(contact_pattern, terminal_and_contact, content)

# Inject JS for Terminal
terminal_script = """
    <script>
        // Terminal Logic
        const termInput = document.getElementById('term-input');
        const termOutput = document.getElementById('term-output');
        
        const commands = {
            'help': 'Available commands: <br> - <b>whoami</b>: Display user info <br> - <b>skills</b>: List technical skills <br> - <b>deploy</b>: Trigger a dummy production deployment <br> - <b>clear</b>: Clear terminal',
            'whoami': 'Jigyasu Singh Chouhan <br> Role: DevOps & Platform Engineer <br> Location: Pune, India',
            'skills': 'AWS, Azure, Docker, Kubernetes, Terraform, Python, Bash, CI/CD, Grafana, vLLM',
            'deploy': 'Initiating deployment pipeline... <br> [1/3] Building containers... <span class="text-green-400">OK</span> <br> [2/3] Running tests... <span class="text-green-400">OK</span> <br> [3/3] Deploying to EKS cluster... <span class="text-green-400">SUCCESS</span> <br> Deployment completed in 2.4s.',
        };

        if (termInput) {
            termInput.addEventListener('keypress', function (e) {
                if (e.key === 'Enter') {
                    const val = this.value.trim().toLowerCase();
                    let response = '';
                    
                    if (val === 'clear') {
                        termOutput.innerHTML = '';
                        this.value = '';
                        return;
                    }
                    
                    if (val === '') {
                        response = '';
                    } else if (commands[val]) {
                        response = commands[val];
                    } else {
                        response = `bash: ${val}: command not found. Type 'help' for available commands.`;
                    }
                    
                    const newEntry = document.createElement('div');
                    newEntry.className = 'mb-2';
                    newEntry.innerHTML = `<span class="text-emerald-500 mr-2">jigyasu@platform-eng:~$</span><span class="text-slate-300">${val}</span><br><div class="text-slate-400 mt-1">${response}</div>`;
                    
                    termOutput.appendChild(newEntry);
                    this.value = '';
                    
                    const termBody = document.getElementById('terminal-body');
                    termBody.scrollTop = termBody.scrollHeight;
                }
            });
        }
    </script>
</body>"""

if "Terminal Logic" not in content:
    content = content.replace('</body>', terminal_script)

with open('/home/jigyasuchauhan/Jigyasusinghchouhan.github.io/index.html', 'w') as f:
    f.write(content)
