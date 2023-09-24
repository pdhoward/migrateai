



The attached ZIP contains two kinds of hierarchy charts for the AWS CARDDEMO application.

CARDDEMO.TRE shows which programs CALL other programs. Thus, it's an application-level view.

The other 28 files show which paragraphs reach other paragraphs within a given program via PERFORM, GOTO, ALTER, FALLTHRU, or CICS ABEND HANDLE. Thus, they are program-level views.

The application view is incomplete because CICS XCTL commands refer to the destination program indirectly, so I'll have to chase the destination back through data declarations to MOVE/SET statements that populate the actual destination at run time. 

These are plain text files because I haven't yet found a box-drawing font that works correctly when python generates PDFs. Python does not handle UTF-8 / Unicode gracefully. 