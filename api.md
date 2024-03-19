## Constants

<dl>
<dt><a href="#REGEX_NAME">REGEX_NAME</a> : <code>RegExp</code></dt>
<dd><p>Regular expression used by <code>extractName()</code>.</p></dd>
<dt><a href="#REGEX_TYPE">REGEX_TYPE</a> : <code>RegExp</code></dt>
<dd><p>Regular expression used by <code>extractType()</code>.</p></dd>
<dt><a href="#REGEX_NAME">REGEX_NAME</a> : <code>RegExp</code></dt>
<dd><p>Regular expression used by <code>extractName()</code>.</p></dd>
<dt><a href="#REGEX_TYPE">REGEX_TYPE</a> : <code>RegExp</code></dt>
<dd><p>Regular expression used by <code>extractType()</code>.</p></dd>
</dl>

## Functions

<dl>
<dt><a href="#extractName">extractName(text)</a> ⇒ <code>String</code> | <code>null</code></dt>
<dd><p>Helper to extract the name from a string, based on a regular expression.</p></dd>
<dt><a href="#extractType">extractType(text)</a> ⇒ <code>String</code> | <code>null</code></dt>
<dd><p>Helper to extract the type of applicant from a string, based on a regular
expression.</p></dd>
<dt><a href="#parseCv">parseCv(text)</a> ⇒ <code>Object</code> | <code>null</code></dt>
<dd><p>Parses a CV into an <code>Object</code> containing information about the
CV, like the name of the applicant.</p></dd>
<dt><a href="#shouldHire">shouldHire(cv)</a> ⇒ <code>boolean</code></dt>
<dd><p>Sophisticated method using cutting edge AI to evaluate a CV and return a
single <code>boolean</code> indicating if the applicant should be hired.</p></dd>
<dt><a href="#extractName">extractName(text)</a> ⇒ <code>String</code> | <code>null</code></dt>
<dd><p>Helper to extract the name from a string, based on a regular expression.</p></dd>
<dt><a href="#extractType">extractType(text)</a> ⇒ <code>String</code> | <code>null</code></dt>
<dd><p>Helper to extract the type of applicant from a string, based on a regular
expression.</p></dd>
<dt><a href="#parseCv">parseCv(text)</a> ⇒ <code>Object</code> | <code>null</code></dt>
<dd><p>Parses a CV into an <code>Object</code> containing information about the
CV, like the name of the applicant.</p></dd>
<dt><a href="#shouldHire">shouldHire(cv)</a> ⇒ <code>boolean</code></dt>
<dd><p>Sophisticated method using cutting edge AI to evaluate a CV and return a
single <code>boolean</code> indicating if the applicant should be hired.</p></dd>
</dl>

<a name="REGEX_NAME"></a>

## REGEX\_NAME : <code>RegExp</code>
<p>Regular expression used by <code>extractName()</code>.</p>

**Kind**: global constant  
<a name="REGEX_TYPE"></a>

## REGEX\_TYPE : <code>RegExp</code>
<p>Regular expression used by <code>extractType()</code>.</p>

**Kind**: global constant  
<a name="REGEX_NAME"></a>

## REGEX\_NAME : <code>RegExp</code>
<p>Regular expression used by <code>extractName()</code>.</p>

**Kind**: global constant  
<a name="REGEX_TYPE"></a>

## REGEX\_TYPE : <code>RegExp</code>
<p>Regular expression used by <code>extractType()</code>.</p>

**Kind**: global constant  
<a name="extractName"></a>

## extractName(text) ⇒ <code>String</code> \| <code>null</code>
<p>Helper to extract the name from a string, based on a regular expression.</p>

**Kind**: global function  
**Returns**: <code>String</code> \| <code>null</code> - <p>The name, if found, <code>null</code> otherwise.</p>  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>String</code> | <p>Raw <code>string</code> containing the name.</p> |

<a name="extractType"></a>

## extractType(text) ⇒ <code>String</code> \| <code>null</code>
<p>Helper to extract the type of applicant from a string, based on a regular
expression.</p>

**Kind**: global function  
**Returns**: <code>String</code> \| <code>null</code> - <p>The type, if found, <code>null</code> otherwise.</p>  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>String</code> | <p>Raw <code>string</code> containing the type.</p> |

<a name="parseCv"></a>

## parseCv(text) ⇒ <code>Object</code> \| <code>null</code>
<p>Parses a CV into an <code>Object</code> containing information about the
CV, like the name of the applicant.</p>

**Kind**: global function  
**Returns**: <code>Object</code> \| <code>null</code> - <p>If successful, returns an <code>Object</code> containing the
name and type of the applicant. Otherwise returns
<code>null</code>.</p>  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>String</code> | <p>Raw <code>string</code> containing the CV.</p> |

<a name="shouldHire"></a>

## shouldHire(cv) ⇒ <code>boolean</code>
<p>Sophisticated method using cutting edge AI to evaluate a CV and return a
single <code>boolean</code> indicating if the applicant should be hired.</p>

**Kind**: global function  
**Returns**: <code>boolean</code> - <p>True if the applicant should be hired.</p>  

| Param | Type | Description |
| --- | --- | --- |
| cv | <code>Object</code> | <p>CV-Object as returned from <code>parseCv()</code>.</p> |

<a name="extractName"></a>

## extractName(text) ⇒ <code>String</code> \| <code>null</code>
<p>Helper to extract the name from a string, based on a regular expression.</p>

**Kind**: global function  
**Returns**: <code>String</code> \| <code>null</code> - <p>The name, if found, <code>null</code> otherwise.</p>  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>String</code> | <p>Raw <code>string</code> containing the name.</p> |

<a name="extractType"></a>

## extractType(text) ⇒ <code>String</code> \| <code>null</code>
<p>Helper to extract the type of applicant from a string, based on a regular
expression.</p>

**Kind**: global function  
**Returns**: <code>String</code> \| <code>null</code> - <p>The type, if found, <code>null</code> otherwise.</p>  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>String</code> | <p>Raw <code>string</code> containing the type.</p> |

<a name="parseCv"></a>

## parseCv(text) ⇒ <code>Object</code> \| <code>null</code>
<p>Parses a CV into an <code>Object</code> containing information about the
CV, like the name of the applicant.</p>

**Kind**: global function  
**Returns**: <code>Object</code> \| <code>null</code> - <p>If successful, returns an <code>Object</code> containing the
name and type of the applicant. Otherwise returns
<code>null</code>.</p>  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>String</code> | <p>Raw <code>string</code> containing the CV.</p> |

<a name="shouldHire"></a>

## shouldHire(cv) ⇒ <code>boolean</code>
<p>Sophisticated method using cutting edge AI to evaluate a CV and return a
single <code>boolean</code> indicating if the applicant should be hired.</p>

**Kind**: global function  
**Returns**: <code>boolean</code> - <p>True if the applicant should be hired.</p>  

| Param | Type | Description |
| --- | --- | --- |
| cv | <code>Object</code> | <p>CV-Object as returned from <code>parseCv()</code>.</p> |

