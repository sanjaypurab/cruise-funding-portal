import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export function Field({ label, name, value, onChange, required, type = 'text', placeholder, error, help, disabled }: { label: string; name: string; value: string; onChange: (value: string) => void; required?: boolean; type?: string; placeholder?: string; error?: string; help?: string; disabled?: boolean }) {
  return <div className="space-y-2">
    <Label htmlFor={name}>{label}{required && <span className="ml-1 text-destructive">*</span>}</Label>
    <Input id={name} name={name} value={value} onChange={(event) => onChange(event.target.value)} type={type} placeholder={placeholder} disabled={disabled} aria-invalid={Boolean(error)} />
    {help && <p className="text-xs leading-relaxed text-muted-foreground">{help}</p>}
    {error && <p className="text-xs font-medium text-destructive">{error}</p>}
  </div>;
}

export function AreaField({ label, name, value, onChange, required, placeholder, help }: { label: string; name: string; value: string; onChange: (value: string) => void; required?: boolean; placeholder?: string; help?: string }) {
  return <div className="space-y-2 md:col-span-2">
    <Label htmlFor={name}>{label}{required && <span className="ml-1 text-destructive">*</span>}</Label>
    <Textarea id={name} name={name} value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} rows={4} />
    {help && <p className="text-xs leading-relaxed text-muted-foreground">{help}</p>}
  </div>;
}

export function SelectField({ label, name, value, onChange, options, required, error, help }: { label: string; name: string; value: string; onChange: (value: string) => void; options: { label: string; value: string }[]; required?: boolean; error?: string; help?: string }) {
  return <div className="space-y-2">
    <Label htmlFor={name}>{label}{required && <span className="ml-1 text-destructive">*</span>}</Label>
    <select id={name} name={name} value={value} onChange={(event) => onChange(event.target.value)} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
      <option value="">Select an option</option>
      {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
    </select>
    {help && <p className="text-xs leading-relaxed text-muted-foreground">{help}</p>}
    {error && <p className="text-xs font-medium text-destructive">{error}</p>}
  </div>;
}
